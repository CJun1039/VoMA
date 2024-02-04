import ActivityCard from "../ActivityCard/activity-card";

export default function RecommendedActivities() {
  return (
    <div>
      <div className="text-2xl font-semibold mb-5">Recommended for you</div>
      <div className="flex flex-row overflow-x-scroll hide-scroll-bar justify-start">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </div>
  );
}
