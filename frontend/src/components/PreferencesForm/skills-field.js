import Select from "react-select";

export default function SkillsField() {
  const options = [
    { value: "Befriending", label: "Befriending" },
    { value: "Driving", label: "Driving" },
    { value: "Emceeing", label: "Emceeing" },
    { value: "First-aid", label: "First-aid" },
    { value: "Graphic Design", label: "Graphic Design" },
    { value: "Music", label: "Music" },
    { value: "Photography/Videography", label: "Photography/Videography" },
    { value: "Sign Language", label: "Sign Language" },
    { value: "Software Development", label: "Software Development" },
    { value: "Tutoring", label: "Tutoring" },
    { value: "Volunteer Management", label: "Volunteer Management" },
  ];
  return (
    <div className="mt-2">
      <Select
        isMulti
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "#DE7D5D",
            primary50: "#DE7D5D",
            primary: "#CC3401",
          },
        })}
      />
    </div>
  );
}
