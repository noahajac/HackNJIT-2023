import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border: 7 px solid #ccc;
`;



interface PersonInfo {
  name: string;
  age: number;
  weight: number;
  height: number;
}


const Crewtable = () => {

  const people: PersonInfo[] = [
    { name: 'John Doe', age: 30, weight: 70, height: 175 },
    { name: 'Jane Smith', age: 25, weight: 60, height: 160 },
  ];




  const renderedPeople = people.map((person, index) => (
  
      <tr>
      <td>{person.name}</td>
      <td>{person.age}</td>
      <td>{person.weight}</td>
      <td>{person.height} cm</td>
      </tr>

  ));

  return (
    <>
    <Table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>weight</th>
      <th>height</th>
    </tr>
  {renderedPeople}
  </Table>
  </>
  );
}

export default Crewtable;
