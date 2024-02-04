import ActivityCard from "../ActivityCard/activity-card";

export default function AllActivities() {
  return (
    <div className="mx-20">
      <div className="text-2xl font-semibold mb-5">View all upcoming opportunities</div>
      <div className="flex flex-row flex-wrap justify-between pb-10">
        <ActivityCard colour={'#FECCCD'}/>
        <ActivityCard colour={'#FECCCD'}/>
        <ActivityCard colour={'#FECCCD'}/>
      </div>
    </div>
  );
}
