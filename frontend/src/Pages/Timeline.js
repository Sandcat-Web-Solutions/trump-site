import { Container, Row, Col } from "react-bootstrap";
import trump from "../Images/TrumpYoung.png";
import university from "../Images/University.png";
import ivana from "../Images/Ivana.png";
import tower from "../Images/TrumpTower.png";
import finance from "../Images/finance.png";
import marla from "../Images/marla.png";
import tvshow from "../Images/tvshow.png";
import melania from "../Images/melania.png";
import chicago from "../Images/chicago.png";
import campaign from "../Images/campaign.png";
import helicopter from "../Images/helicopter.png";
import korea from "../Images/korea.png";
import impeachment from "../Images/impeachment.png";
import campaign2 from "../Images/2024.png";

function Timeline() {
    return (
        <Container fluid className="timeline-container">
            <Row className="timeline-title">
                <div>
                    <h1>The Timeline</h1>
                    <p>Trump through the years</p>
                    <div className="timeline-triangle"></div>
                </div>
            </Row>
            <Row className="timeline-row" style={{ paddingTop: "5%" }}>
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content timeline-image-content">
                        <div>
                            <img src={trump} alt=""></img>
                        </div>
                    </div>

                    <div className="vl"></div>
                </Col>
                <Col className="timeline-col col-12 col-md-6">
                    <div className="timeline-content">
                        <h2>June 14 1946 - Trump is born</h2>
                        <p>Donald John Trump enters the worlds as the forth child of Frederick Christ Trump and Mary Anne MacLeod Trump at Jamaica Hospital in Queens, New York City. </p>
                    </div>
                    <span className="circle"></span>
                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content">
                        <h2>1968 - Education</h2>
                        <p>Donald Trump attends Fordham University in 1984, later transferring to the Wharton School of the University of Pennsylvania, which he graduates from with a bachelor of science in economics.</p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                </Col>
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content timeline-image-content">
                        <img src={university} alt=""></img>
                    </div>
                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content timeline-image-content">
                        <img src={ivana} alt=""></img>
                    </div>
                </Col>
                <Col className="timeline-col col-12 col-md-6">
                    <div className="timeline-content">
                        <h2>1977 - Marriage</h2>
                        <p>Trump maries his first wife, Ivana Trump, who is a Czechoslovakian model. They will welcome three children to the world. Donald Jr, Ivanka and  Eric.</p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content">
                        <h2>1983 - Trump Tower</h2>
                        <p>Trump completes his flagship tower in New York. Located at 721-725 Fith Avenue in the Midtown Manhatten neighborhood of New York City, the builing will be the residence of Donald Trump and several of his family members. </p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                </Col>
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content timeline-image-content">
                        <img src={tower} alt=""></img>
                    </div>
                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content timeline-image-content">
                        <img src={finance} alt=""></img>
                    </div>
                </Col>
                <Col className="timeline-col col-12 col-md-6">
                    <div className="timeline-content">
                        <h2>1990s - financial difficulties</h2>
                        <p>Several ill-judged business decisions in the late 1980's almost lead to personal bankruptcy. He manages to solve these problems and restructure his company.</p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content">
                        <h2>1993 - Second Marriage</h2>
                        <p>In 1993 Trump marries Marla Maples 2 months after Marla gives birth to their child Tiffany. They will devorce six years later in 1999.</p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                </Col>
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content timeline-image-content">
                        <img src={marla} alt=""></img>
                    </div>
                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content timeline-image-content">
                        <img src={tvshow} alt=""></img>
                    </div>
                </Col>
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content">
                        <h2>2000s - TV Show</h2>
                        <p>Trump produces and moderates the reality tv-show "The Apprentice", a competition where diverse contentants trying to earn the opportunity to secure a position in on of organisations run by the host. It runs from 2004-2017</p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="timeline-col col-12 col-md-6">
                    <div className="timeline-content">
                        <h2>2005 - Third Marriage</h2>
                        <p>Trump marries his third wife Melania, who is 24 years younger than him. They will later have one child Barron William Trump.</p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                </Col>
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content timeline-image-content">
                        <img src={melania} alt=""></img>
                    </div>
                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content timeline-image-content">
                        <img src={chicago} alt=""></img>
                    </div>
                </Col>
                <Col className="timeline-col col-12 col-md-6">
                    <div className="timeline-content">
                        <h2>2009 - Trump Tower Chicago</h2>
                        <p>Trump Tower in Chicago is completed. At 423.2m tall it is the seventh tallest building in the USA and was briefly the building with the highest residency until the Burj Khalifa was completed.</p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="timeline-col col-12 col-md-6">
                    <div className="timeline-content">
                        <h2>2016 - Presidential Campaign</h2>
                        <p>To many peoples surprise, Donald Trump ran for president of the united states in 2016. He would win the republican nomination and defeat Hillary Clinton to become president.</p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                </Col>
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content timeline-image-content">
                        <img src={campaign} alt=""></img>
                    </div>
                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content timeline-image-content">
                        <img src={helicopter} alt=""></img>
                    </div>
                </Col>
                <Col className="timeline-col col-12 col-md-6">
                    <div className="timeline-content">
                        <h2>2016-2020 - Presidency</h2>
                        <p>During Trumps presidency, he reshapes the USA. His administration implements significant tax reforms and tax cuts to cooperations. Trump also implements the "zero tolerence" policy at the mexican border.</p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="timeline-col col-12 col-md-6">
                    <div className="timeline-content">
                        <h2>2019 - North Korea</h2>
                        <p>After having met Kim Jong Un several times, Trump becomes the first ever us president to step into North Korea in 2019.</p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                </Col>
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content timeline-image-content">
                        <img src={korea} alt=""></img>
                    </div>
                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content timeline-image-content">
                        <img src={impeachment} alt=""></img>
                    </div>
                </Col>
                <Col className="timeline-col col-12 col-md-6">
                    <div className="timeline-content">
                        <h2>2020 - Impeachment and electoral defeat</h2>
                        <p>Trump runs for president a second time in 2020, but is defeated by Joe Biden. He also gets impeached twice for abuse of office and obstruction of justice.</p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="timeline-col col-12 col-md-6">
                    <div className="timeline-content">
                        <h2>Present - Second Campaign</h2>
                        <p>Donald Trump is currently engaged in a political campaign to secure the republican nomination and run for president again next year in 2024</p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                </Col>
                <Col className="col-12 col-md-6 timeline-col">
                    
                    <div className="timeline-content timeline-image-content">
                        <img src={campaign2} alt="" className="timeline-image"></img>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    );
}; export default Timeline;