import { redirect, json } from "react-router-dom";

import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
  // console.log('new URL(request.url) ', new URL(request.url));
  const searchParams = new URL(request.url).searchParams;
  // console.log('searchParams', searchParams);
  const mode = searchParams.get("mode") || "login";
  const formData = await request.formData();
  const authData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  if (mode !== "signup" && mode !== "login") {
    throw json({ message: "Unsupported mode" }, { status: 422 });
  }
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authData),
  });
  // console.log("response", response);
  if(response.status === 422 || response.status === 401) {
    return response;
  }
  if(!response.ok) {
    throw json({message: "Could not authenticate user."}, {status: 500});
  }
  // soon: manage that token
  const respData = await response.json();
  const token = respData.token;
  localStorage.setItem("token", token);
  const tokenExpired = new Date();
  tokenExpired.setHours(tokenExpired.getHours() + 1);
    console.log('tokenExpired', tokenExpired);
  const tokenExpiredString = tokenExpired.toISOString();
  localStorage.setItem("tokenExpired", tokenExpiredString);

  return redirect("/");
};
