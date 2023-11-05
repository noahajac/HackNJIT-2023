import "./Home.module.css";
import styled from "styled-components";

const AlignedHeader = styled.h1`
    text-align: center;
    color: #39FF14;
`;

const Home = () => {
  return (
    <>
    <AlignedHeader>
    <h1>Welcome to Cr3wm8te!</h1>
    </AlignedHeader>
    <p>Please select an option at the top to continue.</p>
    </>
  );
}

export default Home;
