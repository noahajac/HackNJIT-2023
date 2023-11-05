import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { PersonInfo } from "./Crewtable";

const Table = styled.table`
  border: 7 px solid #ccc;
`;

interface VitalInfo {
  CrewmateID: number;
  Height: number;
  Weight: number;
  BloodPressure: number;
  AddingPhysician: string;
  TimeOfMeasure: string;
  VitalID: number;
}

interface Props {
  person: PersonInfo,
  vitals: VitalInfo[]
}

const CrewDetails = () => {
  const [data, setData] = useState<Props | null>(null);

  let { id } = useParams();

  useEffect(() => {
    const crewmateFetch: Promise<PersonInfo[]> = fetch("https://api.cr3wm8te.biz/crewmate/" + id)
      .then((response) => response.json())
      .catch((error) => console.error(error));

    const vitalsFetch: Promise<VitalInfo[]> = fetch("https://api.cr3wm8te.biz/crewmate/" + id + '/vitals')
    .then((response) => response.json())
    .catch((error) => console.error(error));

    Promise.all([crewmateFetch, vitalsFetch]).then((res) => {
      setData({
        person: res[0][0],
        vitals: res[1]
      })
    })
  }, [id, setData]);

  let renderedInfo;

  if (data === null) {
    renderedInfo = (<tr><td></td></tr>);
  } else {
    renderedInfo = (
      <tr>
        <td>{data.person.FirstName}</td>
        <td>{data.person.LastName}</td>
        <td>{data.person.DOB}</td>
      </tr>
    );
  }

  let renderedVitals;

  if (data === null) {
    renderedVitals = (<tr><td></td></tr>);
  } else {
    renderedVitals = data.vitals.map((vital: VitalInfo) => (
      <tr>
        <td>{vital.TimeOfMeasure}</td>
        <td>{vital.AddingPhysician}</td>
        <td>{vital.Height}</td>
        <td>{vital.Weight}</td>
        <td>{vital.BloodPressure}</td>
      </tr>
    ));
  }

  return (
    <>
      <Table>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>DOB</th>
        </tr>
        {renderedInfo}
      </Table>

      <Table>
        <tr>
          <th>Time Measured</th>
          <th>Physician</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Blood Pressure</th>
        </tr>
        {renderedVitals}
      </Table>
    </>
  );
};

export default CrewDetails;