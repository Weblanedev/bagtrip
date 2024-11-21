import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Copyright © {new Date().getFullYear()} BagTrip</p>
      </div>
      <div>
        <h2>Address</h2>
        <p>Nigeria - 4, Fred Omojole Street, Gbagada, Lagos State, Nigeria</p>
      </div>
      <div>
        <h2>Phone</h2>
        <p>+234 908 353 6923</p>
      </div>
    </footer>
  );
};

export default Footer;
