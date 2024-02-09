import CountUp from "react-countup";
import avatarIcon from "../../assets/avatarIcon.png";
import data from "./profile.json";
import NavBar from "../Navbar/navbar";
import ParticularsForm from "../ParticularsForm/particulars-form";
import PreferencesForm from "../PreferencesForm/preferences-form";
import VolunteerChart from "./volunteer-chart";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";


export default function Profile() {
  const { userData } = useContext(UserContext);


  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 pt-14">
        <div className="flex-col">
          <div className="flex flex-row space-x-6 items-center">
            <img
              src={userData.user.profilePic}
              alt="avatar"
              className="rounded-full h-20 border-slate-400 border"
            />
            <p className="font-semibold text-lg">
              {userData.user.firstname + ' ' + userData.user.lastname}
            </p>
          </div>
          <div className="py-10">
            <Tabs />
          </div>
        </div>
      </div>
    </>
  );
}

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  const { userData } = useContext(UserContext);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div>
            <OverviewTab />
            <div className="w-1/2 mt-7">
              <VolunteerChart />
            </div>
            <div className="py-10">
              <p className="text-lg mb-4 font-semibold">Upcoming Activities</p>
              <UpcomingActivitiesTable />
            </div>
            <div className="py-10">
              <p className="text-lg mb-4 font-semibold">Past Activities</p>
              <PastActivitiestable />
            </div>
          </div>
        );
      case 2:
        return <ParticularsForm userData={userData.user} />;
      case 3:
        return <PreferencesForm userData={userData.user}/>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex mb-6">
        <div
          className={`cursor-pointer py-2 pr-8 mr-10 border-b-2  hover:border-orange-700 hover:text-orange-700 transition ${
            activeTab === 1
              ? 'border-b-2 border-orange-500 text-orange-500 font-bold'
              : ''
          }`}
          onClick={() => handleTabClick(1)}
        >
          Overview
        </div>
        <div
          className={`cursor-pointer py-2 pr-8 mr-10 border-b-2  hover:border-orange-700 hover:text-orange-700 transition ${
            activeTab === 2
              ? 'border-b-2 border-orange-500 text-orange-500 font-bold'
              : ''
          }`}
          onClick={() => handleTabClick(2)}
        >
          Personal Particulars
        </div>
        <div
          className={`cursor-pointer py-2 pr-8 mr-10 border-b-2  hover:border-orange-700 hover:text-orange-700 transition ${
            activeTab === 3
              ? 'border-b-2 border-orange-500 text-orange-500 font-bold'
              : ''
          }`}
          onClick={() => handleTabClick(3)}
        >
          Volunteering Preferences
        </div>
      </div>
      <div>{renderTabContent()}</div>
    </>
  );
}

function OverviewTab() {
  const { userData } = useContext(UserContext);
  return (
    <>
      <div className="mb-4">From the start of your volunteering journey till now, you have...</div>
      <div className="flex space-x-8">
        <div className="border-2 rounded-lg py-2 pl-4 pr-12 text-left">
          <p>clocked a total of</p>
          <p className="text-4xl font-bold">
            <CountUp duration={3} end={userData.user.numHours} />
          </p>
          <p>hours</p>
        </div>
        <div className="border-2 rounded-lg py-2 pl-4 pr-12 text-left">
          <p>made an impact on</p>
          <p className="text-4xl font-bold">
            <CountUp duration={3} end={userData.user.numEvents} />
          </p>
          <p>events</p>
        </div>
      </div>
    </>
  );
}


function UpcomingActivitiesTable() {
  return (
    <table className="table-fixed w-full ">
      <thead className="text-left">
        <tr className="border-b">
          <th className="w-1/3 py-4">Name</th>
          <th className="py-4">Beneficiary</th>
          <th className="py-4">Cause</th>
          <th className="py-4">From</th>
          <th className="py-4">To</th>
          <th className="py-4">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.UpcomingActivities.map((activity, index) => (
          <UpcomingActivitiesRow
            key={index}
            name={activity.name}
            beneficiary={activity.beneficiary}
            cause={activity.cause}
            fromDate={activity.fromDate}
            toDate={activity.toDate}
            status={activity.status}
          />
        ))}
      </tbody>
    </table>
  );
}

function UpcomingActivitiesRow(props) {
  const { name, beneficiary, cause, fromDate, toDate, status } = props;
  return (
    <tr className="border-b">
      <td className="py-4">{name}</td>
      <td className="py-4">{beneficiary}</td>
      <td className="py-4">{cause}</td>
      <td className="py-4">{fromDate}</td>
      <td className="py-4">{toDate}</td>
      <td className="py-4">{status}</td>
    </tr>
  );
}

function PastActivitiestable() {
  return (
    <table className="table-fixed w-full ">
      <thead className="text-left">
        <tr className="border-b">
          <th className="w-1/3 py-4">Name</th>
          <th className="py-4">Beneficiary</th>
          <th className="py-4">Cause</th>
          <th className="py-4">From</th>
          <th className="py-4">To</th>
        </tr>
      </thead>
      <tbody>
        {data.PastActivities.map((activity, index) => (
          <PastActivitiesRow
            key={index}
            name={activity.name}
            beneficiary={activity.beneficiary}
            cause={activity.cause}
            fromDate={activity.fromDate}
            toDate={activity.toDate}
          />
        ))}
      </tbody>
    </table>
  );
}

function PastActivitiesRow(props) {
  const { name, beneficiary, cause, fromDate, toDate } = props;
  return (
    <tr className="border-b">
      <td className="py-4">{name}</td>
      <td className="py-4">{beneficiary}</td>
      <td className="py-4">{cause}</td>
      <td className="py-4">{fromDate}</td>
      <td className="py-4">{toDate}</td>
    </tr>
  );
}
