import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";



function Home() {

  const backendURL = "http://localhost:8000";
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getArticles();
    getUsers();
  }, []);

  /*const articles = [
    {
      "id": 1,
      "fk_user_id": 1,
      "title": "gatito",
      "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
      "created_at": "2023-11-02T11:54:53",
      "last_updated_at": "2023-11-02T11:54:53",
      "imageId": 4,
      "image_url": "https://github.com/Sandcat-Web-Solutions/trump-site/assets/104757716/3a4f27b1-8321-490d-8025-2826a26d00eb"
  },
  {
      "id": 2,
      "fk_user_id": 1,
      "title": "gatito",
      "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
      "created_at": "2023-11-02T11:54:53",
      "last_updated_at": "2023-11-02T11:54:53",
      "imageId": 2,
      "image_url": "https://github.com/Sandcat-Web-Solutions/trump-site/assets/104757716/3a4f27b1-8321-490d-8025-2826a26d00eb"
  },
  {
      "id": 3,
      "fk_user_id": 1,
      "title": "gatito",
      "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
      "created_at": "2023-11-02T11:54:53",
      "last_updated_at": "2023-11-02T11:54:53",
      "imageId": 3,
      "image_url": "https://github.com/Sandcat-Web-Solutions/trump-site/assets/104757716/3a4f27b1-8321-490d-8025-2826a26d00eb"
  },
  {
      "id": 4,
      "fk_user_id": 1,
      "title": "gatito",
      "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
      "created_at": "2023-11-02T11:54:53",
      "last_updated_at": "2023-11-02T11:54:53",
      "imageId": 3,
      "image_url": "https://github.com/Sandcat-Web-Solutions/trump-site/assets/104757716/3a4f27b1-8321-490d-8025-2826a26d00eb"
  },
  {
      "id": 5,
      "fk_user_id": 1,
      "title": "gatito",
      "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
      "created_at": "2023-11-02T11:54:53",
      "last_updated_at": "2023-11-02T11:54:53",
      "imageId": 5,
      "image_url": "https://github.com/Sandcat-Web-Solutions/trump-site/assets/104757716/3a4f27b1-8321-490d-8025-2826a26d00eb"
  },
  {
      "id": 6,
      "fk_user_id": 1,
      "title": "gatito",
      "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
      "created_at": "2023-11-02T11:54:53",
      "last_updated_at": "2023-11-02T11:54:53",
      "imageId": 9,
      "image_url": "https://github.com/Sandcat-Web-Solutions/trump-site/assets/104757716/3a4f27b1-8321-490d-8025-2826a26d00eb"
  },
  {
      "id": 7,
      "fk_user_id": 1,
      "title": "gatito",
      "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
      "created_at": "2023-11-02T11:54:53",
      "last_updated_at": "2023-11-02T11:54:53",
      "imageId": 9,
      "image_url": "https://github.com/Sandcat-Web-Solutions/trump-site/assets/104757716/3a4f27b1-8321-490d-8025-2826a26d00eb"
  },
  {
      "id": 8,
      "fk_user_id": 1,
      "title": "gatito",
      "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
      "created_at": "2023-11-02T11:54:53",
      "last_updated_at": "2023-11-02T11:54:53",
      "imageId": 6,
      "image_url": "https://github.com/Sandcat-Web-Solutions/trump-site/assets/104757716/3a4f27b1-8321-490d-8025-2826a26d00eb"
  }];*/

  function formatLastUpdatedAt(inputDate) {
    const date = new Date(inputDate);
    return date.toLocaleString();
  }

  function handleClick(id) {
    window.location.href = `/article/${id}`;
  };

  async function getArticles() {
    try {
      const response = await axios.get(`${backendURL}/api/articles`);
      setArticles(response.data);
    } catch (error) {
      if (error.response) {
        console.log("errr from server :(");
      } else if (error.request) {
        console.log("error getting response from server :(")
      }
      else {
        console.log("error :(");
      }
    };
  };

  async function getUsers() {
    try {
      const response = await axios.get(`${backendURL}/api/users`);
      setUsers(response.data);
    } catch (error) {
      if (error.response) {
        console.log("errr from server :(");
      } else if (error.request) {
        console.log("error getting response from server :(")
      }
      else {
        console.log("error :(");
      }
    };
  };



  return (
    <Container fluid>
      <Row id="HomepageRow">
        <div>
          <h1>Trump</h1>

          <h2 >Luc Zwyssig Peter Schreivogel Tarek Schütz Sujan Saravana</h2>
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
      {
        articles.map((article) => (
          <Row key={article.id} className="HomepageArticlesRow" onClick={() => handleClick(article.id)} >
            <Col className="col-12 col-md-6 HomepageArticleCol" style={{ paddingLeft: "4%" }}>
              <div>
                <div className="HomepageArticleTitleDiv">
                  <h2>{article.title}</h2>

                  <h4>by {users.find(user => user.id === article.fk_user_id)?.username}</h4>
                </div>
              </div>


              <p className="HomepageArticleText">{article.text}</p>
              
              <Link to={`/article/${article.id}`} style={{textDecoration: "none", color: "#bc2f2f", fontSize: "18px"}}>to article</Link>

              <p>{formatLastUpdatedAt(article.last_updated_at)}</p>

            </Col>
            <Col className="col-12 col-md-6 HomepageArticleImageCol">
              <img src={article.image_url} alt="Cat" style={{ width: "90%", borderRadius: "5px" }} />
            </Col>
          </Row>
        ))
      }
    </Container>
  );
}

export default Home;
