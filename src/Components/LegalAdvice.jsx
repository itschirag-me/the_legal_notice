import React from "react";

const contacts = [
  {
    id: 0,
    link: "mailto:thelegalnotice275@gmail.com?subject=subject&cc=cc@gmail.com",
    icons: "fa fa-envelope-o icons-size",
  },
  {
    id: 1,
    link: "https://www.instagram.com/thelegalnotice/",
    icons: "fa fa-instagram icons-size",
  },
];

const LegalAdvice = () => {
  return (
    <div className="bg-about p-4">
      <div className="container col-lg-8 bg-light p-5 rounded">
        <div className="h2 text-center">LEGAL ADVICE & MORE</div>
        <div className="h5 text-center">
          We aim to provide a platform that can deliver application based
          solutions ranging from simple Legal advice to complex Legal Formats.
          We hope to connect this page and our resources to people who are in
          dire need of Legal Services but cannot afford them. We aim to provide
          them with help that matters, pertaining to fields of legal conduct of
          a case or a legal proceeding in any Court, Tribunal or Authority,
          absolutely free of cost.
        </div>
        <div className="text-center col-4 m-auto">
          <nav className="nav nav-pills justify-content-left my-3">
            {contacts.map((contact) => (
              <div key={contact.id} className="m-auto">
                <a
                  style={{ cursor: "pointer" }}
                  className="nav-link bg-secondary text-light m-2 p-4 shadow-sm"
                  href={contact.link}
                >
                  <b className={contact.icons} aria-hidden="true"></b>
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default LegalAdvice;
