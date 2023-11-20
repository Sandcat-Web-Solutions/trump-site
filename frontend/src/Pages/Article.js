import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Article() {
    const Id = useParams();
    const backendURL = "http://localhost:8000";
    const [article, setArticle] = useState({});
    const [users, setUsers] = useState([]);
    const [randomArticles, setRandomArticles] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        getUsers();
        getArticleById();
        getArticles();
    }, []);


    async function getArticleById() {
        try {
            const response = await axios.get(`${backendURL}/api/article/${Id.Id}`);
            setArticle(response.data);
        } catch (error) {
            if (error.response) {
                console.log("errr from server :(");
            } else if (error.request) {
                console.log("error getting response from server :(")
            }
            else {
                console.log("error :(");
            };
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

    async function getArticles() {
        try {
            const response = await axios.get(`${backendURL}/api/articles`);
            await getRandomArticles(response.data, 2, article.id);
        } catch (error) {
            if (error.response) {
                console.log("errr from server :(");
            } else if (error.request) {
                console.log("error getting response from server :(")
            }
            else {
                console.log("error :(");
            };
        };
    };

    function getRandomArticles(articles, count, id) {
        const randomArticles = [];
        const availableArticles = articles.filter((article) => article.id !== id);
        const articleCount = availableArticles.length;

        if (count >= articleCount) {
            return availableArticles;
        }

        while (randomArticles.length < count) {
            const randomIndex = Math.floor(Math.random() * articleCount);
            const randomArticle = availableArticles[randomIndex];

            randomArticles.push(randomArticle);
        };

        setRandomArticles(randomArticles);
    };

    return (
        <Container fluid>
            <Row id="article-title-row" style={{ marginLeft: "-12px", marginRight: "-12px" }}>
                <Col className="col-12 col-md-6 article-title-col" >
                    <img src={article.image_url} alt="Cat" />
                </Col>
                <Col className="col-12 col-md-6 article-title-col">
                    <h1>Title</h1>
                </Col>
            </Row>
            <Row className="d-flex">
                <Col className="col-12 col-md-8">
                    <div className="article-content">
                        <h4>written by {users.find(user => user.id === article.fk_user_id)?.username}</h4>
                        <hr style={{ width: "100%" }} />
                        <h4>
                            {article.text}
                            {article.text}
                            {article.text}
                            {article.text}
                            {article.text}
                            {article.text}
                            {article.text}
                            {article.text}
                            {article.text}

                        </h4>

                        <img src={article.image_url} alt="" className="article-image"></img>
                        <h4>
                            {article.text}
                            {article.text}
                            {article.text}
                            {article.text}
                            {article.text}
                            {article.text}
                            {article.text}
                            {article.text}
                            {article.text}
                        </h4>

                    </div>
                </Col>
                <Col className="col-12 col-md-4" >
                    <div className="sticky-md">
                        {randomArticles.map((randomArticle) => (
                            <div className="article-block" key={randomArticle.id}>
                                <img src={randomArticle.image_url} alt="Random Article" className="article-image" style={{ width: "70%" }} />
                                <Link to={`/article/${randomArticle.id}`}>
                                    <h2>{randomArticle.title}</h2>
                                </Link>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}; export default Article;