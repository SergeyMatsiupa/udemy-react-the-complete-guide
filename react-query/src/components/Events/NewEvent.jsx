import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createEvent } from "../../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { queryClient } from "../../utils/http.js";

export default function NewEvent() {
  const navigate = useNavigate();

  const { isPending, error, isError, mutate } = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      navigate("/events");
      queryClient.invalidateQueries(["events"]);
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting..."}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to create event"
          message={
            error.info?.message ||
            "Failed to create event. Please check your inputs and try again later."
          }
        />
      )}
    </Modal>
  );
}
