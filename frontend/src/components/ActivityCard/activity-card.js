import { useNavigate } from "react-router-dom";
export default function ActivityCard({ colour, data }) {
  const navigate = useNavigate();
  const colourVariants = {
    white: "bg-white",
    pink: "bg-[#FFF0F0]",
  };
  const handleNavigate = () => {
    navigate("/events/" + data.id);
  };
  return (
    <div
      className={`w-64 min-w-64 rounded ${colourVariants[colour]} overflow-hidden shadow-l hover:shadow-xl rounded-3xl mr-20 mb-8 hover:cursor-pointer`}
      onClick={handleNavigate}
    >
      <img className="w-full" src="/sample.jpeg" alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-l mb-2">{data.title}</div>
        <p className="text-gray-700 text-sm">{data.location}</p>
      </div>
      <div className="text-sm font-semibold px-6 pt-4 pb-2">
        <p>{data.organisation}</p>
      </div>
    </div>
  );
}
