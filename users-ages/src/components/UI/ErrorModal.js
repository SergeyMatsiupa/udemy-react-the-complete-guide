import classesFormContainer from "./FormContainer.module.css";
import classesModal from "./ErrorModal.module.css";

import Button from "./Button";

const ErrorModal = (props) => {
  const okayHandler = () => {
    props.setErrorMsg("");
  };

  return (
    <div className={classesModal.modal}>
      <div
        className={`${classesFormContainer.container} ${classesModal["modal-content"]}`}
      >
        <div className={classesModal["window-caption"]}>Invalid Input</div>
        <div className={classesModal["modal-content-int"]}>
          <p>{props.errorMsg}</p>
          <div className={classesModal["button-container"]}>
            <Button type={"submit"} caption={"Okay"} onClick={okayHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
