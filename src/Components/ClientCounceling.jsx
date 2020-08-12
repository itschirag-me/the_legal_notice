import React from "react";
import Panel from "./Panel";

const ClientCounceling = () => {
  const panels = [
    {
      description:
        "The Legal Notice brings to you an interactive session between a Domestic Violence victim, her brother and an advocate wherein Free Legal Aid was provided. The Client approached us through a connection and we further connected him to the advocate who agreed to our terms.",
      subTitle:
        "We have employed the use of sections 5, 8, 9, 12, 14, 18-23 and 31 of the DV Act.",
      link: "https://www.youtube.com/embed/G0jGZoVq-1I",
    },
    {
      description:
        "The Legal Notice brings an interactive session between a client and a lawyer wherein free legal aid was provided. The client approached us through some connections and we connected him to a lawyer who agreed to our terms. It is a landlord and tenant dispute.",
      subTitle:
        "We have employed the use of Sections 3, 4, 6, 15, 19, 22, 44 of the Delhi Rent Control Act, 1995.",
      link: "https://www.youtube.com/embed/IaOYBPDxgw8",
    },
  ];
  return (
    <div className="container bg-blue p-lg-4 p-2 m-auto rounded shadow">
      <div className="px-lg-4 px-2">
        <div className="h3 text-center text-white">Client Councelling</div>
        <hr />
        {panels.map((panel) => (
          <Panel panel={panel} />
        ))}
      </div>
    </div>
  );
};

export default ClientCounceling;
