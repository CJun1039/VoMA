import ActivityCard from "../ActivityCard/activity-card";
import SearchBar from "../SearchBar/searchBar";

export default function AllActivities() {
  return (
    <div className="mx-40">
      <div className="text-2xl font-semibold mb-5">
        View all upcoming opportunities
      </div>
      <SearchBar />
      <div className="flex flex-row flex-wrap justify-between pt-10 pb-10">
        <ActivityCard colour={"#FECCCD"} />
        <ActivityCard colour={"#FECCCD"} />
        <ActivityCard colour={"#FECCCD"} />
      </div>
    </div>
  );
}
