import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <div className="footer">
            <Row className="footer-row">
                <Col>
                    <h3 className="footer-title">Donald Trump</h3>
                </Col>
                <Col>
                <Row>
                    <Col>
                        <p className="text"><Link to="/">Home</Link></p>
                    </Col>
                    <Col>
                        <p className="text" ><Link to="/timeline">Timeline</Link></p>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row className="last-row">
                <p className="last-text">donaldtrump.com © 2023</p>
            </Row>
        </div>
    )
}

export default Footer;