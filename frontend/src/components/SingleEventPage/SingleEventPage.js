import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eventImage from "../../assets/eventImage.png";
import data from "./event.json";
import NavBar from "../Navbar/navbar";

export default function SingleEventPage() {
  const navigate = useNavigate();
  const handleNavigateButton = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 pt-14 pb-20 grid grid-cols-5 gap-32">
        <div className="col-span-3">
          <div className="flex flex-col items-start">
            <button
              className="bg-orange-red/80 hover:bg-orange-red/90 text-sm text-white py-2 px-4 font-semibold rounded-lg"
              onClick={handleNavigateButton}
            >
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
          <LeftBlock data={data} />
        </div>
      </div>
    </>
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
        return <p>{data.product_description}</p>;
      case 2:
        return <p>{data.volunteering_requirement}</p>;
      case 3:
        return <p>{data.schedule}</p>;
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

function LeftBlock(props) {
  const { data } = props;
  const navigate = useNavigate();
  const handleRegisterButton = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col pt-14">
      <div className="shadow-md p-6 rounded-md mb-4">
        <p className="font-semibold pb-1">Vacancies</p>
        <p className="font-light text-sm">
          {data.vacancies.left} out of {data.vacancies.total} spots left
        </p>
      </div>
      <div className="shadow-md p-6 rounded-md my-4">
        <p className="font-semibold  pb-1">Location</p>
        <p className="font-light text-sm">{data.location}</p>
      </div>
      <div className="shadow-md p-6 rounded-md my-4">
        <p className="font-semibold  pb-1">Contact</p>
        <p className="font-light text-sm">Name: {data.contact.name}</p>
        <p className="font-light text-sm">
          Contact number: {data.contact.contact_number}
        </p>
        <p className="font-light text-sm">Email: {data.contact.email}</p>
      </div>
      <div className="mt-2">
        <button
          className="rounded-md bg-orange-red/80 px-6 py-1.5 font-bold leading-6 text-white shadow-sm hover:bg-orange-red/90"
          onClick={handleRegisterButton}
        >
          Register Interest
        </button>
      </div>
    </div>
  );
}
