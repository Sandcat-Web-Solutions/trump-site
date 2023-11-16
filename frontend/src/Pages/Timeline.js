import { Container, Row, Col } from "react-bootstrap";

function Timeline() {
    return (
        <Container fluid>
            <Row className="timeline-row">
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content">
                        <img src="https://user-images.githubusercontent.com/104757716/283453676-82aa38e0-484e-4d99-ad11-0388756f8e06.jpeg"></img>
                    </div>
                    <div className="vl"></div>
                    <span className="circle"></span>


                </Col>

                <Col className="timeline-col col-12 col-md-6">
                <div className="timeline-content">
                        <h2>Title</h2>
                        <p>This is a sample article. this talks about absolutely nothing and is merely here to figure out what css is relevent and where to position and place said css</p>
                    </div>

                </Col>
            </Row>
            <Row className="timeline-row">
                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content">
                        <h2>Title</h2>
                        <p>This is a sample article. this talks about absolutely nothing and is merely here to figure out what css is relevent and where to position and place said css</p>
                    </div>
                    <span className="circle"></span>
                    <div className="vl"></div>
                    
                    
                    

                </Col>

                <Col className="col-12 col-md-6 timeline-col">
                    <div className="timeline-content">
                        <img src="https://user-images.githubusercontent.com/104757716/283453676-82aa38e0-484e-4d99-ad11-0388756f8e06.jpeg"></img>
                    </div>
                    <div className="vl"></div>


                </Col>
                
            </Row>
            
        </Container>
    );
}; export default Timeline;