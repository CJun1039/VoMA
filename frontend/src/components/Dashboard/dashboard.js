import Navbar from "../Navbar/navbar";
import SearchBar from "../SearchBar/searchBar";
import AllActivities from "./all-activities";
import RecommendedActivities from "./recommended-activities";
import data from "./dashboard.json";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Dashboard() {
  const { userData } = useContext(UserContext);

  

  return (
    <>
      <Navbar />
      <RecommendedActivities data={data.recommendedActivities} />
      <AllActivities data={data.allActivities} />
    </>
  );
}
