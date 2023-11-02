import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cat from "../Images/cat.jpeg"

function Home() {

  const divElements = Array.from({ length: 5 }, (_, index) => (
    <Row key={index} className="HomepageArticlesRow">
      {index % 2 === 0 ? (
        <>
          <Col className="col-12 col-md-6">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
            </p>
          </Col>
          <Col className="col-12 col-md-6 HomepageArticleImageCol">
            <img src={cat}></img>
          </Col>
        </>
      ) : (
        <>
          <Col className="col-12 col-md-6 HomepageArticleImageCol">
            <img src={cat}></img>
          </Col>
          <Col className="col-12 col-md-6">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
            </p>
          </Col>
        </>
      )}
    </Row>
  ));
  //change later GET Request.map() 

  return (
    <Container fluid>
      <Row id="HomepageRow">
        <div style={{ textAlign: "center" }}>
          <h1 id="HomepageTitle">Trump</h1>
          <p className="HomepageText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
          </p>
          <h2 id="HomepageAuthors">Luc Zwyssig, Peter Schreivogel, Sujan Saravana, Tarek Schütz</h2>
        </div>
      </Row>
      
      <svg viewBox="0 0 1440 320" id="HomepageSvg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{ stopColor: 'black', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#37424a', stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <path fill="url(#grad1)" fillOpacity="1" d="M0,64L48,101.3C96,139,192,213,288,229.3C384,245,480,203,576,170.7C672,139,768,117,864,138.7C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
      {divElements}
    </Container>
  );
}

export default Home;
