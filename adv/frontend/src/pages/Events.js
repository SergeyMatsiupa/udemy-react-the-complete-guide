import { useEffect, useState, Suspense } from "react";
import { Link, useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  //   const DUMMY_EVENTS = [
  //     {
  //       id: "e1",
  //       title: "e1 title",
  //     },
  //     {
  //       id: "e2",
  //       title: "e2 title",
  //     },
  //   ];

  //   const [isLoading, setIsLoading] = useState(false);
  //   const [fetchedEvents, setFetchedEvents] = useState();
  //   const [error, setError] = useState();

  //   useEffect(() => {
  //     async function fetchEvents() {
  //       setIsLoading(true);
  //       const response = await fetch("http://localhost:8080/events");

  //       if (!response.ok) {
  //         setError("Fetching events failed.");
  //       } else {
  //         const resData = await response.json();
  //         setFetchedEvents(resData.events);
  //       }
  //       setIsLoading(false);
  //     }

  //     fetchEvents();
  //   }, []);
  // const events = useLoaderData();
  const {events} = useLoaderData();
  if (events.isError) {
    return <p>{events.message}</p>;
  }

  return (
    <>
      {/* <h1>EventsPage</h1> */}
      {/* <EventsList events={events}/> */}
      {/* <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul> */}
      {/* <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
      {/* <EventsList events={events} /> */}
      {/* <EventsList /> */}
      <Suspense fallback={<p style={{textAlign: "center"}}>"Events are loading..."</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export const loader = () => {
  // export const loader = async () => {
  // const response = await fetch("http://localhost:8080/events");
  // if (!response.ok) {
  //   // setError("Fetching events failed.");
  //   // return { isError: true, message: "Couldn't fetch events." };
  //   // throw ({message: "Couldn't fetch events."});
  //   // throw new Response(JSON.stringify({message: "Couldn't fetch events."}), {status: 500});
  //   throw json({ message: "Couldn't fetch events." }, { status: 500 });
  // } else {
  //   const resData = await response.json();
  //   return resData.events;
  // }
  return defer({
    events: loadEvents(),
  });
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

export default EventsPage;
