// import close from "./assets/images/close.png";
import Footer from "./Footer";
import "./modal.css";
import banner from "./assets/images/earthmap.png";

const Modal = props => {
  const attachedClasses = props.open
    ? ["open", props.className]
    : ["close", props.className];

  const backdropClasses = props.open ? ["backdrop_open"] : ["backdrop_close"];

  return (
    <div className={`modal_container ${backdropClasses.join(" ")}`}>
      <nav>
        <div>
          <p className="logo">BagTrip</p>
        </div>
        <div>
          <button className="btn_primary" onClick={props.close}>
            Home
          </button>
        </div>
      </nav>

      <div className={`modal ${attachedClasses.join(" ")}`}>
        {props.children}
      </div>
      <img className="banner" src={banner} alt="" />
      <Footer />
    </div>
  );
};

export default Modal;
