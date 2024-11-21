import { useState } from "react";
import { countryList } from "./utilities";
import "./contact.css";

const Contact = () => {
  const initialFormState = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    accountType: "",
    amountToLend: "",
  };
  const [formInfo, setFormInfo] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function sendEmail(e) {
    e.preventDefault();
    // try {
    //   setSubmitting(true);
    //   await emailjs.sendForm(
    //     "service_hewfsvw",
    //     "template_oc86c2v",
    //     e.target,
    //     "user_lBrxthpDH33Dv04wPBLyu"
    //   );
    //   setSubmitting(false);
    //   setSuccess(true);
    // } catch (error) {
    //   alert(
    //     "There has been an error sending your details, please try again later"
    //   );
    //   setSubmitting(false);
    // }
    setSubmitting(true);
    setTimeout(() => {
      setSuccess(true);
      setSubmitting(false);
      e.target.reset();
      setFormInfo(initialFormState);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }, 2000);
  }

  return (
    <>
      <section className="contact_section">
        <h1>Get Started</h1>
        <p>
          Please fill the form and submit. You will be contacted by one of our
          team within 3 working days.
        </p>
        <form onSubmit={sendEmail}>
          <div>
            <input
              type="text"
              placeholder="Business Name"
              name="firstName"
              value={formInfo.firstName}
              onChange={(event) => {
                setFormInfo({ ...formInfo, firstName: event.target.value });
              }}
              required
            />
            <input
              type="text"
              placeholder="Location Preference"
              name="lastName"
              value={formInfo.lastName}
              onChange={(event) => {
                setFormInfo({
                  ...formInfo,
                  lastName: event.target.value,
                });
              }}
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formInfo.email}
              onChange={(event) => {
                setFormInfo({ ...formInfo, email: event.target.value });
              }}
              required
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formInfo.phoneNumber}
              onChange={(event) => {
                setFormInfo({
                  ...formInfo,
                  phoneNumber: event.target.value,
                });
              }}
              required
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Number of Travellers ?"
              name="amountToLend"
              value={formInfo.amountToLend}
              onChange={(event) => {
                setFormInfo({
                  ...formInfo,
                  amountToLend: event.target.value,
                });
              }}
              required
            />
            <select
              placeholder="Country"
              name="country"
              value={formInfo.country}
              onChange={(event) => {
                setFormInfo({
                  ...formInfo,
                  country: event.target.value,
                });
              }}
              required
            >
              <option value="">Select your country</option>
              {countryList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button disabled={submitting} className="btn_primary">
              {!submitting ? "SUBMIT" : "please wait..."}
            </button>
          </div>
          {success && (
            <div className="alert-success">
              <p>
                Details submitted successfully. A team member will reach out to
                you soon
              </p>
            </div>
          )}
        </form>
      </section>
    </>
  );
};
export default Contact;
