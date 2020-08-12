import React, { Component } from "react";

class LegalUpdates extends Component {
  state = {
    updates: [
      {
        _id: 0,
        title:
          "Hospitals which provides some services for free but charges for others falls under COPRA: SC",
        show: false,
        subTitle:
          "Union of India vs. N K Srivasta, Civil Appeal No 2823 of 2020",
        description:
          "The Supreme Court on 1 August 2020 clarified that it is only when a hospital provides medical services free of cost across the board to all the patient that it would stand outside the purview of Consumer Protection Act. 2019. In the present case, the complainant alleged medical negligence against Sarvodaya Hospital and Safdarjung Hospital.The District Forum had held the complaint not- maintainable on the ground that treatment had been afforded free of cost to the patient.The Division Bench said that, “A hospital which renders free services to a certain category of patients, while providing services which are charged to the bulk of others would not lie outside the purview of the jurisdiction of the consumer fora”",
      },
      {
        _id: 1,
        title:
          "Warns of Contempt Proceedings against schools found flouting order to accept fee payment in instalments amid COVID-19 crisis: Madras HC",
        show: false,
        subTitle:
          "TN Nursery Primary Matriculation v. Chief Secretary, Revenue Department, W.P. No. 9987 of 2020",
        description:
          "The Madras High Court on 31 July 2020 warned that schools insisting on the full payment of fees, in violation of the Court's earlier order directing the payment of fees in instalments amid the COVID-19 pandemic, may be hauled up for contempt of Court. The State’s Counsel informed the Single judge bench that there have been several complaints from parents that Educational Institutions were flouting the Court’s earlier order.The Judge had passed an interim order directing that educational institutions can only collect 40% of tuition fees from students for the time being, while schools remain closed. The bench said that, “This Court is taking a very serious note of the violation that has been brought to its notice” And directed the Education Department of the State to conduct an immediate enquiry into the matter and act against errant institutions.",
      },
      {
        _id: 2,
        title:
          "NDPS Case Against Brazilian Citizen From Chennai To Delhi Court: SC",
        show: false,
        subTitle:
          "Jailson Silva v Intelligence Officer, NCB, Transfer Petition(Criminal) No. 525/2019",
        description:
          "The Supreme Court on 1 August, 2020 transferred a Narcotic Drugs and Psychotropic Substances Act(NDPS) case against a Brazilian Citizen from Chennai Court to Delhi Court. It was contended before the court that that the trial in the Chennai Court is effectively halted for the last about four years primarily because he is unable to communicate with his counsel and arranging for his defence has practically become impossible.He also submitted that the Embassy of Brazil, Delhi has indicated that it is willing to provide assistance if the trial is shifted to a Delhi Court. The Court noted that the trial against Jailson Silva has not made much progress in the Chennai Court since last four years primarily because of the communication problem.The court further directed that the case be transferred to a Delhi Court since Narcotics Crime Bureau(NCB) has lawyers in Delhi",
      },
      {
        _id: 3,
        title:
          "Religious gatherings not the same as limited gatherings at places of worship : Kerala HC",
        show: false,
        subTitle: "TK Jayakumar v. State of Kerala, WP(C).No.15342 OF 2020",
        description:
          "The Kerala High Court on 31 July 2020 dismissed a petition moved by two lawyers, challenging the Kerala Government’s Orders permitting a maximum of hundred persons at a time in places of worship. The Petitioners argued that the State’s Orders are violative of the Government of India’s ‘Unlock’ guidelines and Standard Operating procedures(SOPs) amid the COVID- 19 pandemic.They also assailed that despite the bar on religious gatherings and congregations in the Government of India’s Order dated May 30, 2020, the State Government on June 5 and on June 24 allowed relaxations in religious and other places of worship. However, the bench refused their contentions and ruled that, “Contentions that there is an absolute bar on religious assembly is not accepted.",
      },
      {
        _id: 4,
        title:
          "Anticipatory bail granted to Dr Zafarul Islam Khan, former DMC Chairperson in sedition FIR",
        show: false,
        subTitle:
          "Dr Zafarul Islam Khan v Govt of NCT Delhi, Bail Appl. No. __ of 2020",
        description:
          "The Delhi High Court on 31 July 2020 granted anticipatory bail to Dr Zafarul Islam Khan, former Chairperson of the Delhi Minorities Commission, in connection with the sedition FIR lodged against him. The order was passed by a Single Judge Bench after the Delhi Police stated that Khan was no longer required for further investigation.He is to be released on bail subject to furnishing a personal bond of Rs 50, 000 and one surety of the like amount. An FIR was lodged against Khan for commission of offences of sedition and promoting religious enmity in connection with his remarks highlighting the targeting of Muslims by “bigots” in India during COVID- 19. Khan had also expressed his thanks to Kuwait for expressing international concern on the issue faced by the Muslim minority in India.",
      },
      {
        _id: 5,
        title: "Direction against culling enough?: SC",
        show: false,
        subTitle: "Abhinav Mohanty v Union of India",
        description:
          "While dealing with a plea filed by Biju Janata Dal (BJD) MP Anubhav Mohanty against the brutal killing of wild animals, the Supreme Court on 30 July 2020 observed that this issue needed to be looked at in terms of a solution. The Petitioner was seeking the Court’s intervention against the indiscriminate and brutal killing of wild animals in India.However, the three judge bench pondered over the issue to ask if a mere direction against the culling of these animals is enough to address the issue. The Court said We are treating this matter with anxiety.” while noting that wild animals could be killed on account of them crossing over on to farmlands and destroying crops.However, it cannot always be justified.",
      },
      {
        _id: 6,
        title:
          "Karnataka Common Entrance Test (KCET) examination cannot be stalled: Karnataka HC",
        show: false,
        subTitle: "Eric E Steaphenes v. State of Karnataka, W.P.No.8916/2020",
        description:
          "The Karnataka High Court on 29 July 2020 held that this year's Karnataka Common Entrance Test (KCET) examination cannot be stalled, even as the COVID-19 pandemic continues to spread in the state. The Court thus refused to grant any interim relief to the petitioners in terms of postponing or cancelling the exam, which is scheduled to be held on July 30, 31 and August 1. The Court had previously said that the petitioners are coming to the court at the ‘eleventh hour’.But asked the State to reconsider their decision. The Court, while refusing to stall or postpone the Exams, called on the State to ensure that a proper Standard Operating Procedure is laid so that on no ground should a student be denied the opportunity to write the exam.It further directed the authorities to provide transport to students on a case-to -case basis, and not just to COVID positive students",
      },
      {
        _id: 7,
        title:
          "Unpaid instalment as per a settlement agreement not operational debt under IBC: NCLT",
        show: false,
        subTitle:
          "M/S Brand Realty Services Ltd vs M/S Sir John Bakeries India Pvt Ltd,",
        description:
          "The National Company Law Tribunal, Delhi has held that unpaid instalment as per a settlement agreement cannot be treated as operational debt under Section 5(21) of the Insolvency & Bankruptcy Code. The petitioner, being an Operational Creditor, had filed a Section 9 IBC plea against the Corporate Debtor.The petitioner had claimed that they had entered into an ‘Account Settlement Agreement’ but the Corporate Debtor failed to pay the outstanding dues of 33 lakhs. The Court added that “..in order to trigger Section 9 IBC, an Operational Creditor is required to establish a default for non - payment of Operational Debt as defined in Section 5(21) of IBC, which means a claim in respect of the provision of goods or services including employment or a debt in respect of the payment of dues arising under any law for the time being in force and if a person fails to establish that, then they cannot initiate CIRP under Section 9 of the IBC.",
      },
      {
        _id: 8,
        title:
          "Reconsider conduct of Karnataka CET amid COVID-19 pandemic: Karnataka HC",
        show: false,
        subTitle: "Eric E Steaphenes and ors v. State of Karnataka",
        description:
          "The Karnataka High Court on 28 July 2020 directed the state government to reconsider its decision to allow the conduct of the Karnataka Common Entrance Test 2020 (KCET) amid the ongoing COVID-19 pandemic. The Court also emphasised that the petitioners have reached the Court at the Eleventh hour, however there is a drastic change everyday.The Court, considering the dire situation, has issued interim directions and will deliver the full judgement on 29 July 2020. The Court, in its directions, said that, “It is true that the petitioners have approached the Court belatedly.However, there is a drastic change in the situation everyday.We, therefore direct the state government to immediately reconsider the question of holding CET considering the aforesaid aspects",
      },
      {
        _id: 9,
        title:
          "Doing away of physical non-judicial stamp paper rule valid: Gujarat HC",
        show: false,
        subTitle:
          "Manish Jitendra Shah v. State of Gujarat, Special Civil Appl. No. 16221, 16370 of 2019",
        description:
          "The Gujarat High Court on 28 July 2020 disposed off a group of six petitions challenging the State’s decision to halt the use of physical non-judicial stamp paper in the State. The Petitioners had urged the Court to declare that the new rule, Rule 8-A, in the Gujarat Stamps Supply and Sales Rules, 1987 was ultra vires the Indian Stamp Act, 1889 and the Gujarat Stamp Act, 1958. The Court while dismissing the petitions, stated that, “it is well within the power of the Respondent State to pass the notifications(inserting the Rule) ...This is more particularly in light of the fact that the Indian Stamp Act, 1899 and Gujarat Stamp Act, 1958 are independent of each other and Rule 8A of the Gujarat Stamps Supply and Sales Rules, 1987 does not amend either the Indian Stamp Act, 1899 or the Gujarat Stamp Act, 1958 ...",
      },
      {
        _id: 10,
        title:
          "SC Directs Centre, States/UTs To File Affidavit Showing Compliance Of Directions",
        show: false,
        subTitle:
          "COVID-19 Suo Moto Case, Suo Motu Writ Petition (Civil) No(s). 7/2020",
        description:
          "The Supreme Court on 27 July 2020 has directed the Centre to file a fresh detailed Affidavit within two weeks in order to show the steps that have been taken in pursuance of the directions issued by the Supreme Court on 19th June, 2020. The Court observed that the Centre had given vague affidavits without any regards to any details of compliance with respect to the slew of directions passed by it on June 19. The Court said that, “An affidavit has been filed on behalf of the Union of India, which does not give the details of compliance of the directions except that orders have been issued to comply the directions.Mere direction to comply the directions is not enough.”",
      },
      {
        _id: 11,
        title:
          "Liability For Offence Depends On Role One Plays In Company Affairs And Not On Mere Designation Or Status: SC",
        show: false,
        subTitle:
          "Shailendra Swaroop v. Deputy Director, ED, Crml Appeal No. 2463 of 2014",
        description:
          "The Supreme Court has on 27 July 2020 held that, for proceeding against a Director of a company for contravention of provisions of Foreign Exchange Regulation Act, 1973(FERA), the necessary ingredient for proceeding shall be that at the time offence was committed, the Director was in charge of and was responsible to the company for the conduct of the business of the company. The Two Judge Bench said that, “the liability to be proceeded with for offence under Section 68 of FERA, 1973 depends on the role one plays in the affairs of the company”. n this particular case, ED issued a show cause notice against all the Directors of a company named Modi Xerox Ltd.(MXL) for alleged FERA violations.In response to this, the appellant stated that he was only a part- time, non - executive Director of MXL and he was never in the employment of the Company nor had an executive role in the Company.",
      },
      {
        _id: 12,
        title:
          "Victim under SC/ST Act includes family members of person who suffered harm, can take part in proceedings: Karnataka HC",
        show: false,
        subTitle:
          "Marenna @ Mareppa v. State of Karnataka, In Crl. Petition No.200315/2020:",
        description:
          "The Kalaburagi Bench of the Karnataka High Court on 26 July 2020 observed that a victim under the Scheduled Castes and the Scheduled Tribes (Prevention of Atrocities) Act, 1989 (SC/ST Act) would include the victim's family members and dependents. The Court observed that as per Section 15A(5) of the Act, the right to participate in any court proceedings is conferred upon a victim or his/ her dependents.A Single Judge Bench held that, “…the definition “victim” as enumerated in the Act is wide enough… If a person sustains injuries arising out of crime then, he himself, his parents, family members are also to be considered as victim as per the above definition. In the present case, the mother of the victim was the informant.The accused persons had confronted the victim, a 14 year old boy, and hit him on the head with an axe, alongwith hurling several casteist slurs.",
      },
      {
        _id: 13,
        title: "Contractual workers entitled Child Care Leave: Uttarakhand HC",
        show: false,
        subTitle:
          "Tanuja Tolia v. State of Uttarakhand, Writ Petition (S/B) No. 263 of 2019",
        description:
          "A Full Bench of the Uttarakhand High Court on 26 July 2020 has re-affirmed that government employees appointed on contract cannot be denied maternity or child care leave (CCL) only on account of their being contractual workers, as opposed to regular employees. The Court held that Child care leave should be for the same number of days as an earned leave which a regular employee gets in a year.This was in view of the Government Order issued by the State Government in May 2011 where it was mentioned that the CCL shall be treated on the same footing as earned leave. The Court also added that normally child care leave should not be denied.It could only be denied by the employer on very pressing valid and plausible reasons, which must be specifically stated, when such a request for child care leave is being denied.",
      },
      {
        _id: 14,
        title:
          "Injunction to block 50 rogue websites infringing Snapdeal trademark: Delhi HC",
        show: false,
        subTitle:
          "Snapdeal Pvt Ltd vs snapdealluckydraws.org.in, CS(COMM)No.264/2020 & I.A.Nos.5848-52/2020",
        description:
          "The Delhi High Court on 20 July 2020 has granted an injunction in favour of e-commerce company Snapdeal in relation to fifty rogue websites that are infringing its registered trademark. The Court, in a dynamic order, also granted the liberty to approach it to array other rogue website(s) who are carrying on similar illegal activities, as and when the same comes to its notice. Snapdeal had filed a suit in the HC that inter alia the respondent, around 50 websites degrading its goodwill and infringing its registered trademark. The Court thus ordered, “Accordingly, defendant Nos. 1 to 50 are injuncted from carrying on their activities either under the plaintiff’s trademark or any other trademark which is deceptively similar to the plaintiff’s trademark.”",
      },
    ],
  };

  handlerReadMore = (updateId) => {
    let updates = [...this.state.updates];
    updates = updates.map((update) => {
      if (update._id === updateId) {
        update.show = !update.show;
        return update;
      } else {
        return update;
      }
    });
    this.setState({ updates });
  };

  render() {
    const { updates } = this.state;
    return (
      <div className="bg-legal">
        <div className="container p-5">
          <div className="h1 text-center text-white">Legal Updates</div>
          {updates.map((update) => (
            <div
              key={update._id}
              className="col-lg-12 p-4 bg-white rounded col-14 my-5 shadow"
            >
              <div className="container h2">{update.title}</div>
              <div className={update.show ? "container my-3 tansition-04" : "d-none tansition-04"}>
                <hr />
                <div className="h4 text-dark">{update.subTitle}</div>
                <div className="h5">{update.description}</div>
                <button
                  onClick={()=>this.handlerReadMore(update._id)}
                  className="btn btn-danger rounded-lg border-0 px-3 py-2 shadow-sm"
                >
                  Read less
                </button>
              </div>
              <div className="container">
                <button
                  onClick={()=>this.handlerReadMore(update._id)}
                  className={
                    update.show
                      ? "d-none"
                      : "btn btn-blue text-white rounded-lg border-0 shadow-sm px-3 py-2 my-3"
                  }
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default LegalUpdates;
