import Navbar from "../Navbar/navbar";
import SearchBar from "../SearchBar/searchBar";
import AllActivities from "../Dashboard/all-activities";
import data from "../Dashboard/dashboard.json";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="mt-10 pl-40">
        <button
          onClick={()=>{navigate("/new")}}
          className="flex justify-center rounded-md bg-orange-red/80 px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-orange-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create new listing
        </button>
      </div>
      <AllActivities data={data.allActivities} />
    </>
  );
}
