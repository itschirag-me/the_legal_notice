import React, { Component } from "react";
import tnl_2 from "./assets/image/tln_02.jpg";
import SomeWork from "./SomeWork";
import Home from "./partials/Home";
import Panel from "./Panel";

class Body extends Component {
  state = {};
  render() {
    const data = [
      {
        id: 0,
        title: "LEGAL DRAFTING",
        image: "Legal_Drafting",
        link : "legal-drafting",
        description:
          "Legal Drafting is the amalgam law and fact drafted in clear and crisp language. It is the written essence of all our conceptual ideas/argument which we can use in Court proceedings. We also seek to provide people in dire need of legal help with formats of Legal drafting and skills.",
      },
      {
        id: 1,
        title: "CLIENT COUNSELING",
        image: "Client_Counceling",
        link : "client-councelling",
        description:
          "We have devised a unique strategy to answer legal queries relating to procedural as well as remedial processes in the form of a client counseling session which are oftentimes derived from real world scenarios and cases that we have faced.",
      },
      {
        id: 2,
        title: "BLOGS",
        image: "Blog",
        link : "blogs",
        description:
          "Through the medium of a blog, we aim to transform the complex legal intricacies of heaps of different laws and judgements into a classified field of Articles, Case Comments and much more in  simple language that is easy to read and understand.",
      },
      {
        id: 3,
        title: "LEGAL UPDATES",
        image: "Legal_Update",
        link : "legal-updates",
        description:
          "We aspire to cut the clutter amongst all the different channels and provide you with a single source legal news and updates that is unbiased, factual and one that is aloof from controversy.",
      },
      {
        id: 4,
        title: "LEGAL MAXIMS",
        image: "Legal_Maxims",
        link : "legal-maxims",
        description:
          "We aspire to emulate the dictionary meaning of these complex legalese into simple and comprehensible language through the medium of appropriate case laws and examples.",
      },
      {
        id: 5,
        title: "FREE LEGAL ADVICE",
        image: "Free_Legal_Advice",
        link : "legal-adivce",
        description:
          "We hope to connect this page and our resources to people who are in dire need of Legal Services but cannot afford them. We aim to provide them with help that matters, pertaining to fields of legal aid to legal advice, absolutely free of cost.",
      },
    ];
    const panel = {
      title: "Panel Discussion",
      description:
        "The Legal Notice presents interactive panel discussions.The Panel Discussion are on the practical applicability of various provisions of law along-with real life court experience while dealing with these provisions. These kind of discussions will help one in long run as people have easy access to theoretical knowledge of any topic they desire. All the discussions are uploaded on our YouTube channel and on our Instagram handle. Stay Updated and Stay Connected",
      link: "https://www.youtube.com/embed/JopmZOqN8Gk",
    };
    return (
      <div>
        <Home image={tnl_2} />
        <SomeWork data={data} />
        <div className="px-3">
          <Panel panel={panel} />
        </div>
      </div>
    );
  }
}

export default Body;
