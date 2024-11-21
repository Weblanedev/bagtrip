import close from "./assets/images/close.png";
import "./modal.css";

const Modal = (props) => {
  const attachedClasses = props.open
    ? ["open", props.className]
    : ["close", props.className];

  const backdropClasses = props.open ? ["backdrop_open"] : ["backdrop_close"];

  return (
    <div className={`modal_container ${backdropClasses.join(" ")}`}>
      <div className={`modal ${attachedClasses.join(" ")}`}>
        <span className="close-modal" onClick={props.close}>
          <img src={close} alt="close" />
        </span>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
