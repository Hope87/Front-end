import React from "react";
import Select from "react-select";

const options = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 15, label: "15" },
];

const findOption = (value) => options.find((opt) => opt.value === value);

const StepSelector = ({ value, onChange }) => (
  <div style={{ width: 150 }}>
    <Select options={options} value={findOption(value)} onChange={onChange} />
  </div>
);

export default StepSelector;
