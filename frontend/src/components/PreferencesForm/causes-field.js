import Select from "react-select";

export default function CausesField() {
  const options = [
    { value: "Arts & Culture", label: "Arts & Culture" },
    { value: "Children & Youth", label: "Children & Youth" },
    { value: "Elderly", label: "Elderly" },
    { value: "Environment", label: "Environment" },
    { value: "Mental Health", label: "Mental Health" },
    { value: "Migrant Workers", label: "Migrant Workers" },
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
              primary25: '#DE7D5D',
              primary50: '#DE7D5D',
              primary: '#CC3401'
            }})}
      />
    </div>
  );
}
