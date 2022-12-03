import React from 'react'
import { Button, Col, Row } from "react-bootstrap";
import '../sass/home.scss'

export default function Home () {
    return(
        <>
            <Row id='top'>
                <div className='image-container'>
                    <div className='black-rect'></div>
                    <div className="image-hero"></div>
                </div>
                <Col md={12} lg={{offset: 2, span: 4}} className='title'>
                        <p>MODERN</p>
                        <p>ART GALLERY</p>
                </Col>
                <Col md={12} lg={{offset: 1, span: 3}} className='info'>
                        <p>
                            The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.
                        </p>
                        <div className='button-group'>
                            <Button>Our Location</Button>
                            <span></span>
                        </div>
                </Col>
            </Row>
        </>
    )
}