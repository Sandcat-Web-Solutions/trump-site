import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { useParams } from "react-router";
import images from "../Images/images";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Article() {
    const Id = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    })



    const articles = [
        {
            "id": 1,
            "fk_user_id": 1,
            "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
            "created_at": "2023-11-02T11:54:53",
            "last_updated_at": "2023-11-02T11:54:53",
            "imageId": 1
        },
        {
            "id": 2,
            "fk_user_id": 1,
            "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
            "created_at": "2023-11-02T11:54:53",
            "last_updated_at": "2023-11-02T11:54:53",
            "imageId": 2
        },
        {
            "id": 3,
            "fk_user_id": 1,
            "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
            "created_at": "2023-11-02T11:54:53",
            "last_updated_at": "2023-11-02T11:54:53",
            "imageId": 3
        },
        {
            "id": 4,
            "fk_user_id": 1,
            "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
            "created_at": "2023-11-02T11:54:53",
            "last_updated_at": "2023-11-02T11:54:53",
            "imageId": 3
        },
        {
            "id": 5,
            "fk_user_id": 1,
            "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
            "created_at": "2023-11-02T11:54:53",
            "last_updated_at": "2023-11-02T11:54:53",
            "imageId": 1
        },
        {
            "id": 6,
            "fk_user_id": 1,
            "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
            "created_at": "2023-11-02T11:54:53",
            "last_updated_at": "2023-11-02T11:54:53",
            "imageId": 9
        },
        {
            "id": 7,
            "fk_user_id": 1,
            "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
            "created_at": "2023-11-02T11:54:53",
            "last_updated_at": "2023-11-02T11:54:53",
            "imageId": 10
        },
        {
            "id": 8,
            "fk_user_id": 1,
            "text": "# Title ## John ### Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
            "created_at": "2023-11-02T11:54:53",
            "last_updated_at": "2023-11-02T11:54:53",
            "imageId": 6
        }];

    function getRandomArticles(articles, count, imageId) {
        const randomArticles = [];
        const availableArticles = articles.filter((article) => article.imageId !== imageId);
        const articleCount = availableArticles.length;

        if (count >= articleCount) {
            return availableArticles;
        }

        while (randomArticles.length < count) {
            const randomIndex = Math.floor(Math.random() * articleCount);
            const randomArticle = availableArticles[randomIndex];

            randomArticles.push(randomArticle);
        }

        return randomArticles;
    }


    const randomArticles = getRandomArticles(articles, 2, Id.Id);
    return (
        <Container fluid>
            <Row id="article-title-row" style={{ marginLeft: "-12px", marginRight: "-12px" }}>
                <Col className="col-12 col-md-6 article-title-col" >
                    <img src={images[`cat${Id.Id}`]} alt="Cat" />
                </Col>
                <Col className="col-12 col-md-6 article-title-col">
                    <h1>Title</h1>
                    <p>s et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet. Lore</p>
                </Col>
            </Row>
            <Row className="d-flex">
                <Col className="col-12 col-md-8">
                    <div className="article-content">
                        <h4>written by John</h4>
                        <hr style={{ width: "100%" }} />
                        <h4 >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore maagna
                            aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat,  sed
                            diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed
                            diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed
                            diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
                        </h4>
                        <img src={images[`cat${Id.Id}`]} className="article-image"></img>
                        <h4>
                            sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed
                            diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed
                            diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed
                            diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est Lorem ipsum dolor sit amet.</h4>
                    </div>
                </Col>
                <Col className="col-12 col-md-4">
                    <div className="sticky-md">
                        {randomArticles.map((article) => (
                            <div className="article-block" key={article.id} style={{width: "100%"}}>
                                <h2>Trump Incident</h2>
                                <img src={images[`cat${article.imageId}`]} alt="Cat" className="article-image" style={{ width: "70%" }} />
                                <Link to={`/article/${article.id}`}>visit</Link>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>


    );
}; export default Article;