import ActivityCard from "../ActivityCard/activity-card";
import SearchBar from "../SearchBar/searchBar";

export default function AllActivities(props) {
  const { data } = props;
  return (
    <div className="mx-40">
      <div className="text-2xl font-semibold mb-5">
        View all upcoming opportunities
      </div>
      <SearchBar />
      <div className="flex flex-row flex-wrap justify-between my-10">
        {data.map((activity, index) => (
          <ActivityCard key={index} colour={"#FECCCD"} data={activity} />
        ))}
      </div>
    </div>
  );
}
