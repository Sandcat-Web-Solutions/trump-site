import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaLongArrowAltRight } from "react-icons/fa";
import Header from "../Components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Article() {
    const Id = useParams();
    const backendURL = "http://localhost:8000";
    const [article, setArticle] = useState({});
    const [users, setUsers] = useState([]);
    const [randomArticles, setRandomArticles] = useState([]);
    const [writingComment, setWritingComment] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getUsers();
        getArticleById();
        getArticles();
        getComments();

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
            };
        };
    };

    async function getArticles() {
        try {
            const response = await axios.get(`${backendURL}/api/articles`);
            getRandomArticles(response.data, 2, article.id);
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
        const availableArticles = articles.filter((article) => article.id !== id);
        const articleCount = availableArticles.length;
        const randomArticles = [];

        if (count >= articleCount) {
            setRandomArticles(availableArticles);
            return;
        }

        while (randomArticles.length < count) {
            const randomIndex = Math.floor(Math.random() * articleCount);
            const randomArticle = availableArticles[randomIndex];

            if (!randomArticles.includes(randomArticle)) {
                randomArticles.push(randomArticle);
            }
        }

        setRandomArticles(randomArticles);
    }


    async function getComments() {
        try {
            const response = await axios.get(`${backendURL}/api/comment/${Id.Id}`);
            setComments(response.data);
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

    async function postComment() {
        try {
            const token = sessionStorage.getItem("token");

            if (!token) {
                notify();
                return;
            }
            const response = await axios.post(
                `${backendURL}/api/comment/${Id.Id}`,
                writingComment,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setWritingComment("");
            getComments();
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log("response error");
            }
            if (error.message === "Network Error") { //axios is doing weird this is only option
                notify();
            }
        };

    };

    const notify = () => {
        toast.error(
          <div className="Toast">
            <p>Login to post a comment!</p>
            <p>
              <a href="/login" >Login Here</a>
            </p>
          </div>,
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      };




    function formatLastUpdatedAt(inputDate) {
        const date = new Date(inputDate);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    }

    return (
        <Container fluid>
            <ToastContainer/>
            <Row id="article-title-row" style={{ marginLeft: "-12px", marginRight: "-12px" }}>

                <Col className="col-12 col-md-6 article-title-col" >

                    <Header />
                    <h1>{article.title}</h1>
                </Col>
                <Col className="col-12 col-md-6 article-title-col" >
                    <img src={article.image_url} alt="Cat" />
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

                        <img src={article.image_url} alt="" className="inline-article-image"></img>
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
                    <div className="comment-section">
                        <hr style={{ width: "100%" }} />
                        <input type="text" value={writingComment} onChange={(e) => setWritingComment(e.target.value)} className="comment-text" placeholder="write comment"></input>
                        <input type="button" value="Post" className="comment-button" onClick={postComment}></input>
                        <div className="comments">
                            {comments.map((comment) => (

                                <div key={comment.id} className="single-comment">
                                    <div className="comment-content">

                                        <h5>{comment.text}</h5>
                                        <div className="comment-info">
                                            <p>{users.find((user) => user.id === comment.fk_user_id)?.username}</p>
                                            <p>{formatLastUpdatedAt(comment.created_at)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </Col>
                <Col className="col-12 col-md-4" >
                    <div className="sticky-md">
                        <h2 style={{ textDecoration: "underline" }}>Further articles:</h2>
                        <div>
                            {randomArticles.map((randomArticle) => (
                                <div style={{ width: "90%" }} key={randomArticle.id}>

                                    <a href={`/article/${randomArticle.id}`}>
                                        <h3> <FaLongArrowAltRight />{randomArticle.title}  </h3>
                                    </a>

                                    <p>{randomArticle.text.slice(0, 100)}...</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
    );
}; export default Article;