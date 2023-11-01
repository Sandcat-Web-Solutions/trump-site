import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cat from "../Images/cat.jpeg";

function Home() {
  const rowStyle = {
    backgroundImage: `url(${cat})`,
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: "10%"
  };

  const textStyle = {
    textAlign: "center",
    color: "white",
  };

  const divElements = Array.from({ length: 5 }, (_, index) => (
    <Row key={index} style={{ height: "400px" }}>
      {index % 2 === 0 ? (
        <>
          <Col className="col-12 col-md-6">Infos</Col>
          <Col className="col-12 col-md-6">Title</Col>
        </>
      ) : (
        <>
          <Col className="col-12 col-md-6">Title</Col>
          <Col className="col-12 col-md-6">Info</Col>
        </>
      )}
    </Row>
  ));
   //change later GET Request.map() 

  return (
    <Container fluid>
      <Row style={rowStyle}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "100px" }}>Trump</h1>
          <p style={textStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
          </p>
          <h2>Luc Zwyssig, Peter Schreivogel, Sujan Saravana, Tarek Schütz</h2>
        </div>
      </Row>
      {divElements}
    </Container>
  );
}

export default Home;
