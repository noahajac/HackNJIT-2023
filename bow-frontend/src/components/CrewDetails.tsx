import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { PersonInfo } from "./Crewtable";
import AddVitalForm from "./AddVitalForm";

const Table = styled.table`
  font-size: 20px;
  border: 7 px solid #ccc;
  margin-left: auto;
  margin-right: auto;
`;

const AlignedHeader = styled.h1`
  font-size: 64px;
  text-align: center;
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
        <td>{data.person.FirstName + ' ' +data.person.LastName}</td>
        <td>|</td>
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
        <td>|</td>
        <td>{vital.AddingPhysician}</td>
        <td>|</td>
        <td>{vital.Height}</td>
        <td>|</td>
        <td>{vital.Weight}</td>
        <td>|</td>
        <td>{vital.BloodPressure}</td>
        <td></td>
      </tr>
    ));
  }
  
  return (
    <>
        <AlignedHeader>
        Crew Member:
        </AlignedHeader>
      <Table>
        <tr>
          <th>Name</th>
          <th>|</th>
          <th>DOB</th>
        </tr>
        {renderedInfo}
      </Table>
        <AlignedHeader>
        Vitals:
        </AlignedHeader>
      <Table>
        <tr>
          <th>Time Measured</th>
          <th>|</th>
          <th>Physician</th>
          <th>|</th>
          <th>Height</th>
          <th>|</th>
          <th>Weight</th>
          <th>|</th>
          <th>Blood Pressure</th>
          <th></th>
        </tr>
        {renderedVitals}
      </Table>

      <AddVitalForm id={id} />
    </>
  );
};

export default CrewDetails;