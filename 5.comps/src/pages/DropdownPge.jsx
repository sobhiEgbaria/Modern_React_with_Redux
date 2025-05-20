import Dropdown from "../components/Dropdown";
const options = [
  {
    label: "Red",
    value: "Red",
  },
  {
    label: "green",
    value: "green",
  },
  {
    label: "white",
    value: "white",
  },
];
const DropdownPage = () => {
  return (
    <>
      <Dropdown options={options} />
    </>
  );
};

export default DropdownPage;
