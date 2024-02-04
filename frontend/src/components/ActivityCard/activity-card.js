export default function ActivityCard({ colour }) {
  const colourVariants = {
    white: 'bg-white',
    pink: 'bg-[#FFF0F0]'
  }
  return (
    <div className={`w-64 min-w-64 rounded ${colourVariants[colour]} overflow-hidden shadow-xl hover:shadow-2xl rounded-3xl mr-20`}>
      <img
        className="w-full"
        src="/sample.jpeg"
        alt=""
      />
      <div className="px-6 py-4">
        <div className="font-bold text-l mb-2">
          Project ROSE - Sembawang - Volunteer Coordinator [YCDT-S]
        </div>
        <p className="text-gray-700 text-sm">
          105 Canberra Street Eastbrook @ Canberra...
        </p>
      </div>
      <div className="text-sm font-semibold px-6 pt-4 pb-2">
        <p>Youth Corps Singapore</p>
      </div>
    </div>
  );
}
