import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  border: 7 px solid #ccc;
`;

interface VitalInfo {
  CrewmateID: number;
  FirstName: string;
  LastName: string;
  BP: string;
  Weight: number;
  Physician: string;
  TOM: string;

}

const CrewDetails = () => {
  const [data, setData] = useState<VitalInfo[] | null>(null);

  useEffect(() => {
    fetch("https://api.cr3wm8te.biz/crewmates")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  let renderedPeople;

  if (data === null) {
    renderedPeople = (<tr><td></td></tr>);
  } else {
    renderedPeople = data.map((person: VitalInfo) => (
      <tr>
        <td>{person.FirstName}</td>
        <td>{person.LastName}</td>
        <td>{person.BP}</td>
        <td>{person.Weight}</td>
        <td>{person.Physician}</td>
        <td>{person.TOM}</td>
      </tr>
    ));
  }

  return (
    <>
      <Table>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th>BP</th>
          <th>Weight</th>
          <th>Physician</th>
          <th>Time of Measure</th>
        </tr>
        {renderedPeople}
      </Table>
    </>
  );
};

export default CrewDetails;