import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";

import Header from "../Header.jsx";
import { fetchEvent } from "../../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
// import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import Modal from "../UI/Modal.jsx";
import { deleteEvent } from "../../utils/http.js";
import { queryClient } from "../../utils/http.js";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);
  const params = useParams();
  const id = params.id;

  const { data, isPending, isError, error } = useQuery({
    queryFn: ({ signal }) => fetchEvent({ signal, id: id }),
    queryKey: ["events", id],
  });

  const navigate = useNavigate();
  const {
    error: deletionError,
    isError: isErrorDeletion,
    isPending: isPendingDeletion,
    mutate,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
    onSettled: () => {
      queryClient.invalidateQueries(['events', params.id]);
    },
  });

  const onDeleteHandler = () => {
    // const confirmDelete = window.confirm("are you sure you want delete event?");
    // if (confirmDelete) {
    mutate({ id: id });
    // }
  };

  const deletingStartHandler = () => {
    setIsDeleting(true);
  };

  const handleStopDelete = () => {
    setIsDeleting(false);
  };

  // console.log("EventDetails data", data);

  let content;
  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <p>Fetching event data...</p>
      </div>
    );
  }
  if (isError) {
    content = (
      <div id="event-details-content" className="center">
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            "Failed to fetch event data, please try again later"
          }
        />
        ;
      </div>
    );
  }
  if (data) {
    const formattedDate = new Date(data.date).toLocaleString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            {/* <button onClick={onDeleteHandler}>Delete</button> */}
            <button onClick={deletingStartHandler}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {/* {data.date} @ {data.time} */}
                {formattedDate} @ {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete this event? This action cannot be
            undone
          </p>
          <div className="form-actions">
            {isPendingDeletion && <p>Deleting, please wait...</p>}
            {!isPendingDeletion && (
              <>
                <button className="button-text" onClick={handleStopDelete}>
                  Cancel
                </button>
                <button className="button" onClick={onDeleteHandler}>
                  Delete
                </button>
              </>
            )}
          </div>
          {isErrorDeletion && (
            <ErrorBlock
              title="Failed to delete event"
              message={
                deletionError.info?.message ||
                "Failed to delete event, please try again later"
              }
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
