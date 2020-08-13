import React, { Component } from "react";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <div className="bg-contact-us">
        <div className="container p-4">
          <div className="h1 text-center text-white">Contact Us</div>
          <div className="col-14 my-4 px-lg-5">
            <iframe
              className="w-100 row-10 border-0 rounded"
              src="https://forms.gle/zYaPLTyJpJaZx57p6"
              title="Google Form"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
