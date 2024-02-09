import ActivityCard from "../ActivityCard/activity-card";

export default function RecommendedActivities(props) {
  const { data } = props;
  return (
    <div className="mx-40 mt-10">
      <div className="text-2xl font-semibold mb-5">Recommended for you</div>
      <div className="flex flex-row overflow-x-auto justify-start scrollbar-hide pb-10 ">
        <div className="flex flex-nowrap">
          {data.map((activity, index) => (
            <ActivityCard key={index} colour={"pink"} data={activity} />
          ))}
        </div>
      </div>
    </div>
  );
}
