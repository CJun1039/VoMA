import Navbar from "../Navbar/navbar";
import SearchBar from "../SearchBar/searchBar";
import AllActivities from "./all-activities";
import RecommendedActivities from "./recommended-activities";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <RecommendedActivities />
      <AllActivities />
    </>
  );
}
