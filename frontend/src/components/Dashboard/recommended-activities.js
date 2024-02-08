import ActivityCard from "../ActivityCard/activity-card";

export default function RecommendedActivities() {
  return (
    <div className="mx-40 mt-10">
      <div className="text-2xl font-semibold mb-5">Recommended for you</div>
      <div className="flex flex-row overflow-x-auto justify-start scrollbar-hide pb-10 ">
        <div className="flex flex-nowrap">
          <ActivityCard colour={"pink"} />
          <ActivityCard colour={"pink"} />
          <ActivityCard colour={"pink"} />
          <ActivityCard colour={"pink"} />
        </div>
      </div>
    </div>
  );
}
