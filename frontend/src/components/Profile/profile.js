import { useState } from "react";

export default function Profile() {
  return (
    <div className="container mx-auto px-4 pt-14 pb-20">
      <div className="flex-col">
        <div className="pb-10">Avatar + Name</div>
        <div className="py-10">
          <Tabs />
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
          <div>
            <OverviewTab />
          </div>
        );
      case 2:
        return <div>Personal Particulars</div>;
      case 3:
        return <div>Volunteering Preferences</div>;
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
          Overview
        </div>
        <div
          className={`cursor-pointer py-2 pr-8 mr-10 border-b-2  hover:border-orange-700 hover:text-orange-700 transition ${
            activeTab === 2
              ? "border-b-2 border-orange-500 text-orange-500 font-bold"
              : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          Personal Particulars
        </div>
        <div
          className={`cursor-pointer py-2 pr-8 mr-10 border-b-2  hover:border-orange-700 hover:text-orange-700 transition ${
            activeTab === 3
              ? "border-b-2 border-orange-500 text-orange-500 font-bold"
              : ""
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
  return (
    <>
      <div>
        From the start of your volunteering journey till now, you have...
      </div>
      <div className="flex">
        <div>
          <p>clocked a total of</p>
          <p>60</p>
          <p>hours</p>
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
        <UpcomingActivitiesRow
          name="Heart-2-Heart Talk (2nd Edition)"
          beneficiary="Thye Hwa Kuan"
          cause="Elderly"
          fromDate="30/01/2023"
          toDate="07/02/2023"
          status="Pending Approval"
        />
        <UpcomingActivitiesRow
          name="Heart-2-Heart Talk (2nd Edition)"
          beneficiary="Thye Hwa Kuan"
          cause="Elderly"
          fromDate="30/01/2023"
          toDate="07/02/2023"
          status="Confirmed"
        />
        <UpcomingActivitiesRow
          name="Heart-2-Heart Talk (2nd Edition)"
          beneficiary="Thye Hwa Kuan"
          cause="Elderly"
          fromDate="30/01/2023"
          toDate="07/02/2023"
          status="Confirmed"
        />
        <UpcomingActivitiesRow
          name="Heart-2-Heart Talk (2nd Edition)"
          beneficiary="Thye Hwa Kuan"
          cause="Elderly"
          fromDate="30/01/2023"
          toDate="07/02/2023"
          status="Confirmed"
        />
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
        <PastActivitiesRow
          name="Heart-2-Heart Talk (2nd Edition)"
          beneficiary="Thye Hwa Kuan"
          cause="Elderly"
          fromDate="30/01/2023"
          toDate="07/02/2023"
        />
        <PastActivitiesRow
          name="Heart-2-Heart Talk (2nd Edition)"
          beneficiary="Thye Hwa Kuan"
          cause="Elderly"
          fromDate="30/01/2023"
          toDate="07/02/2023"
        />
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
