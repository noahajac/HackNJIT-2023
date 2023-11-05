import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id?: string;
}

const AddVitalForm = (props: Props) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<{
    addingPhysician?: string;
    height?: number;
    weight?: number;
    bloodPressure?: number;
  }>({});

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    fetch("https://api.cr3wm8te.biz/crewmate/" + props.id + "/vital", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    }).then(() => {
      navigate(0);
    })
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Reporting Physician: </label>
      <input
        value={inputs.addingPhysician || ""}
        name="addingPhysician"
        onChange={handleChange}
        type="text"
      />
      <br />
      <label>Height:</label>
      <input
        value={inputs.height || ""}
        name="height"
        onChange={handleChange}
      />
      <br />
      <label>Weight:</label>
      <input
        value={inputs.weight || ""}
        name="weight"
        onChange={handleChange}
      />
      <br />
      <label>Blood Pressure:</label>
      <input
        value={inputs.bloodPressure || ""}
        name="bloodPressure"
        onChange={handleChange}
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default AddVitalForm;
