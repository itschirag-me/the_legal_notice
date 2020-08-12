import React, { Component } from "react";
import Search from "./common/Search";

class LegalMaxims extends Component {
  state = {
    searchQuery : "",
    laws: [
      {
        _id: 0,
        title: "Obiter Dictum",
        defination:
          "The legal maxim is of latin origin meaning “said in passing” or an “incidental statement”. It is an incidental remark or opinion by a judge that is not binding.The maxim roughly translates to “by the way” and it refers to a statement a person said in passing. While talking in legal terms this maxim refers to a persuasive statement only and it is an unnecessary passage in a judicial opinion. Such statements are not supported by the force of precedent but may be significant to the case.",
        illustration:
          "The acknowledgment of the salary of the accused in the case of trespass was “obiter dictum” to the case.",
        lawTitle: "Mohandas Issardas v. A.N Sattanathan, (AIR 1955 Bom)",
        description:
          "While answering a few questions about “whether an obiter dictum of the Supreme Court was as much binding upon the High Courts as an express decision given by the Supreme Court”, the court observed that: Obiter dictum was an expression of opinion on a point, which was not necessary to the decision of the case.",
      },
      {
        _id: 1,
        title: "Coram non Judice",
        defination:
          "1. This legal maxim is of latin origin meaning a legal proceeding outside the authority of the judge. It is used to indicate a proceeding legal in nature happening outside the authority of a judge, i.e. without a judge, with not proper presence, or without any legal jurisdiction. Any order or sentence passed by a court or tribunal, which does not possess the authority to try an accused of that particular offence, shall be in violation of the law of the land, not enforceable, and it would be termed as Coram non judice",
        illustration:
          "1. Since the case belonged to the jurisdiction of B, therefore, the order passed by A is “Coram non judice”.",
        lawTitle: "State of Rajasthan v. Jeev Raj, (AIR 2011 12 SCC 252)",
        description:
          "In this case the court held that, a decree passed by a court without jurisdiction over the subject-matter or on other grounds which goes to the root of its exercise or jurisdiction, lacks inherent jurisdiction. It is a “Coram non judice”.Respondeat superior",
      },
      {
        _id: 2,
        title: "Respondeat superior",
        defination:
          "1. The legal maxim is of latin origin meaning let the principal answer. The maxim lays down that the principal has vicarious liability for the acts of his/her agents. This rule is also called master-servant rule. This maxim makes the principal responsible for the acts of his agents only during the course of employment.If the agent makes a mistake while working outside the course of employment, in that case the principal cannot be held liable for his mistakes.",
        illustration:
          "1. A was working in B´s shop as a mechanic. One day while working on a customer's car A broke a piece of it. Here B is responsible for A´s mistake.",
        lawTitle: "The State Of Bihar v. Rani Sonabati Kumari (961 AIR 221)",
        description:
          "In the above mentioned case the principle of Respondeat Superior was considered by the honorable Supreme Court of India",
      },
      {
        _id: 3,
        title: "Quid Pro Quo",
        defination:
          "1. The legal maxim is of latin origin meaning “what for what” or “something for something”. It is the exchange of things of similar value. a valid and binding mutual consideration agreed upon by two parties in a contractual agreement commonly used as giving of one valuable thing for another. For the formation of a valid contract between two parties, who are not merchants, quid pro quo is an essential element.The presence of a quid pro quo acts as a surety which indicates the sincerity of both the parties in fulfilling the contract.",
        illustration:
          "1. A and B came to a contractual agreement where A agreed to construct a swimming pool for B and to maintain the “quid pro quo” B will pay him Rs. 35,000 for the job.",
        lawTitle:
          "State of U.P. v. Sitapur Packing Wood Suppliers, (AIR 2003 SC 2165)",
        description:
          "The Apex Court held that the question of quid pro quo is necessary when a fee is compensatory, for every fee paid quid pro quo is not necessary.",
      },
      {
        _id: 4,
        title: "Volenti non fit injuria",
        defination:
          "1. The legal maxim is of latin origin meaning those who voluntarily agree to danger cannot ask remedy for the same. In literal meaning the maxim means that when a person agrees to danger then he cannot file a complaint for any damages suffered by him during the process. Here, it is necessary the consent was taken freely and voluntarily by the person and was not obtained by illegal means, and that the person was aware of what he might be subjecting himself to.",
        illustration:
          "1. If a person decides to jump into the cage of the lion in the zoo voluntarily, then he can’t sue the zoo for damages.",
        lawTitle:
          "National Insurance Co. Ltd. v. Gonti Eliza David, (1984 ACJ 8)",
        description:
          "The Bombay High Court held that if the driver had suffered the injury due to his rash and negligent driving, following the maxim of “volenti non fit injuria” a claim could not have been maintainable.",
      },
    ],
  };

  handlerSearch = query => {
    this.setState({ searchQuery : query });
  };

  render() {
    const { laws : allLaws, searchQuery } = this.state;

    const laws = searchQuery ? allLaws.filter(law => {
      return law.lawTitle.toLowerCase().includes(searchQuery.toLowerCase());
    }) : allLaws

    return (
      <div className="bg-maxims">
        <div className="container p-4">
          <div className="h1 text-center text-white">Legal Maxims</div>

          <div className="my-5 col-lg-8 col">
            <Search onSearch={this.handlerSearch} />
          </div>
          {laws.map((law) => (
            <div
              key={law._id}
              className="col-lg-12 col-14 bg-white rounded p-4 my-5 shadow"
            >
              <div className="h2">{law.title}</div>
              <div className="h5 text-dark">Defination :</div>
              <p className="h6">{law.defination}</p>
              <div className="h5 text-dark">Illustration :</div>
              <p className="h6">{law.illustration}</p>
              <div className="h5 text-dark">Case Law :</div>
              <p className="h6">
                <b>{law.lawTitle}</b>
              </p>
              <p className="h6">{law.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default LegalMaxims;
