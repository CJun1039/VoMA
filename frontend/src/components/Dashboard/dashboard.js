import Navbar from "../Navbar/navbar";
import SearchBar from "../SearchBar/searchBar";
import AllActivities from "./all-activities";
import RecommendedActivities from "./recommended-activities";
import data from "./dashboard.json";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <RecommendedActivities data={data.recommendedActivities} />
      <AllActivities data={data.allActivities} />
    </>
  );
}
