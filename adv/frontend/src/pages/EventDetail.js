import {
  useParams,
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import { Suspense } from "react";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  // const params = useParams();
  const { event, events } = useRouteLoaderData("event-detail");
  // console.log("EventDetailPage data", data);
  return (
    <>
      {/* <h1>EventDetailPage</h1> */}
      {/* <p>Event ID: {params.id}</p> */}
      <Suspense
        fallback={
          <p style={{ textAlign: "center" }}>Loading event details...</p>
        }
      >
        <Await resolve={event}>{(event) => <EventItem event={event} />}</Await>
      </Suspense>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Events are loading...</p>}
      >
        <Await resolve={events}>
        {(events) => <EventsList events={events} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.id;
  // const response = await fetch("http://localhost:8080/events/" + id);
  // // console.log('EventDetailPage response', response);
  // if (response.ok) {
  //   return response;
  // } else {
  //   throw json({ message: "Cannot fetch event for id " + id }, { status: 500 });
  // }
  return defer({
    events: loadEvents(),
    event: await loadEvent(id),
  });
};

const loadEvent = async (id) => {
  const response = await fetch("http://localhost:8080/events/" + id);
  // console.log('EventDetailPage response', response);
  if (response.ok) {
    // return response;
    const resData = await response.json();
    return resData.event;
  } else {
    throw json({ message: "Cannot fetch event for id " + id }, { status: 500 });
  }
};

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Couldn't fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const action = async ({ request, params }) => {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  if (!response.ok) {
    throw json(
      { message: "Could not find event with id=" + id },
      { status: 500 }
    );
  }
  return redirect("/events");
};
