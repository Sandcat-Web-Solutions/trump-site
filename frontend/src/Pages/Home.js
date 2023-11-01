import React from "react";
import { Container, Row } from "react-bootstrap";
import cat from "../Images/cat.jpeg";

function Home() {
  const rowStyle = {
    backgroundImage: `url(${cat})`,
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const textStyle = {
    textAlign: "center",
    color: "white",
  };

  return (
    <Container fluid>
      <Row style={rowStyle}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "100px" }}>Trump</h1>
          <p style={textStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla ut commodo sagittis, sapien dui mattis
          </p>
          <h2>Luc Zwyssig, Peter Schreivogel, Sujan Saravana, Tarek Schütz</h2>
        </div>
      </Row>
    </Container>
  );
}

export default Home;
