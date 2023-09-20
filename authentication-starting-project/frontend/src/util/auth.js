import {redirect} from "react-router-dom";

export const getTokenDuration = () => {
    const storedStrExpiration = localStorage.getItem("tokenExpired");
    const storedExpiration = new Date(storedStrExpiration);
    const now = new Date();
    const tokenDuration = storedExpiration.getTime() - now.getTime();
    return tokenDuration;
}

export const getAuthToken = () => {
    const token = localStorage.getItem("token");
    if(!token) {
        return null;
    }
    const tokenDuration = getTokenDuration();
    if(tokenDuration < 0) {
        return "EXPIRED";
    }
    return token;
}

export const tokenLoader = () => {
    return getAuthToken();
}

export const checkAuthLoader = () => {
    const token = getAuthToken();
    if(!token) {
        return redirect("/auth");
    }
    return null;
}