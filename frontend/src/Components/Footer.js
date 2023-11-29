import React from "react";
import { Row, Col } from "react-bootstrap";

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
                        <p className="text"><a href="/">Home</a></p>
                    </Col>
                    <Col>
                        <p className="text" ><a href="/timeline">Timeline</a></p>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row className="last-row">
                <p className="last-text">KBW Winterthur 2023</p>
            </Row>
        </div>
    )
}

export default Footer;