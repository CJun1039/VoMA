import { useState } from "react";
import eventImage from "../../assets/eventImage.png";

export default function SingleEventPage() {
  return (
    <div className="container mx-auto px-4 pb-20 grid grid-cols-5 gap-32">
      <div className="col-span-3">
        <div className="flex flex-col items-start pt-14">
          <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 font-bold rounded-lg">
            Return to Dashboard
          </button>
          <img
            src={eventImage}
            alt="Event"
            className="object-cover object-center h-96 w-full rounded-lg my-6"
          />
          <Tabs />
        </div>
      </div>
      <div className="col-span-2">
        <LeftBlock />
      </div>
    </div>
  );
}

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        );
      case 2:
        return (
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        );
      case 3:
        return (
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex mb-4">
        <div
          className={`cursor-pointer py-2 pr-8 mr-10 border-b-2  hover:border-orange-700 hover:text-orange-700 transition ${
            activeTab === 1
              ? "border-b-2 border-orange-500 text-orange-500 font-bold"
              : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          Product Description
        </div>
        <div
          className={`cursor-pointer py-2 pr-8 mr-10 border-b-2 hover:border-orange-700 hover:text-orange-700 transition ${
            activeTab === 2
              ? "border-b-2 border-orange-500 text-orange-500 font-bold"
              : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          Volunteer Requirements
        </div>
        <div
          className={`cursor-pointer py-2 pr-8 mr-10 border-b-2 hover:border-orange-700 hover:text-orange-700 transition ${
            activeTab === 3
              ? "border-b-2 border-orange-500 text-orange-500 font-bold"
              : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          Schedule
        </div>
      </div>
      <div>{renderTabContent()}</div>
    </>
  );
}

function LeftBlock() {
  return (
    <div className="flex flex-col pt-14">
      <div className="shadow-md p-6 rounded-md mb-4">
        <p className="font-semibold pb-1">Vacancies</p>
        <p className="font-light text-sm">5 out of 21 spots left</p>
      </div>
      <div className="shadow-md p-6 rounded-md my-4">
        <p className="font-semibold  pb-1">Location</p>
        <p className="font-light text-sm">
          5 Beach Road St Andrew's Senior Care - Joy Connect Singapore 190005
        </p>
      </div>
      <div className="shadow-md p-6 rounded-md my-4">
        <p className="font-semibold  pb-1">Contact</p>
        <p className="font-light text-sm">Name</p>
        <p className="font-light text-sm">Contact number</p>
        <p className="font-light text-sm">Email</p>
      </div>
    </div>
  );
}
