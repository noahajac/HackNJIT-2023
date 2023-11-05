import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "./Nav/Nav";
import { Link } from "react-router-dom";
const Table = styled.table`
  border: 7 px solid #ccc;
  margin-left: auto;
  margin-right: auto;
`;

export interface PersonInfo {
  CrewmateID: number;
  FirstName: string;
  LastName: string;
  DOB: string;
}

const Crewtable = () => {
  const [data, setData] = useState<PersonInfo[] | null>(null);

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
    renderedPeople = data.map((person: PersonInfo) => (
      <tr>
        <td><Link to={'/crewmate/' +person.CrewmateID}>{person.FirstName + ' ' +person.LastName}</Link></td>
        <td>{person.DOB}</td>
      </tr>
    ));
  }

  return (
    <>
      <Table>
        <tr>
          <th>Name</th>
          <th>DOB</th>
        </tr>
        {renderedPeople}
      </Table>
    </>
  );
};

export default Crewtable;
