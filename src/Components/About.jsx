import React from "react";
import CardAbout from "./common/CardAbout";

const About = () => {
  const details = [
    {
      id: 0,
      name: "Rishu Pandey",
      title: "Founding Director.The Legal Notice",
      description:
        "Rishu Yogesh Pandey is a law student from IP university, Delhi.",
      image: "Rishu",
      quotes:
        "If you are working on something that you really care about, you don't have to be pushed.THE VISION pulls you.",
    },
    {
      id: 1,
      name: "Sahil Grag",
      title: "Founding Director.The Legal Notice",
      description: "Sahil Garg is a law student from IP University, New Delhi.",
      image: "sahil1",
      quotes: "Entropy is inevitable.",
    },
    {
      id: 2,
      name: "Samarth Nayar",
      title: "",
      description:
        "Third year law student pursuing BA.LLB.from Vivekananda Institute of  Professional Studies New Delhi",
      image: "Samarth",
      quotes: "",
    },
    {
      id: 3,
      name: "Sarthak",
      title: "",
      description: "Sarthak is a law student from Indraprastha University",
      image: "Sarthak",
      quotes: "",
    },
    {
      id: 4,
      name: "Pankhuri",
      title: "",
      description:
        "Pankhuri Pankaj is a law student pursuing her BA LLB from New Delhi.",
      image: "pankhuri2",
      quotes: "",
    },
    {
      id: 5,
      name: "Rachel",
      title: "",
      description:
        "Rachel Mangla is a 3rd year student in Vivekananda Institute of Professional Studies pursuing the BA LLB course.",
      image: "rachel",
      quotes: "",
    },
    {
      id: 6,
      name: "Harshit",
      title: "",
      description:
        "Harshit Arora is an aspiring BA LLB student at Maharaja Agrasen Institute of Management Studies, Delhi,",
      image: "Harshit",
      quotes: "",
    },
    {
      id: 7,
      name: "Raunak",
      title: "",
      description:
        "Raunak is a 3rd year student in Vivekananda Institute of Professional Studies pursuing the BA LLB course.",
      image: "Raunak",
      quotes:
        "                                                                                                                                         ",
    },
  ];
  
  return (
    <div className="bg-about p-lg-4 py-4">
      <div className="col-11 bg-blue m-auto rounded p-lg-4 py-4 shadow">
        <div className="h2 text-center text-white">About</div>
        <hr />
        <div className="row px-4">
          {details.map((info) => (
            <div key={info.id} className="col-lg-4 col-12 mx-auto p-lg-4 py-4">
              <CardAbout
                name={info.name}
                title={info.title}
                profile={info.image}
                description={info.description}
                quotes={info.quotes}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
