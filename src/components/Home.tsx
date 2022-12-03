import React from 'react'
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'
import '../sass/home.scss'

export default function Home () {
    const navigate = useNavigate()
    return(
        <>
            <Row id='top'>
                <div className='image-container'>
                    <div className='black-rect'></div>
                    <div className="image-hero"></div>
                </div>
                <Col md={12} lg={{offset: 1, span: 5}} xl={{offset:2, span: 4}} className='title'>
                        <p>MODERN</p>
                        <p>ART GALLERY</p>
                </Col>
                <Col md={12} lg={{offset: 1, span: 4}} xl={{offset: 1, span: 3}} className='info'>
                        <p>
                            The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.
                        </p>
                        <div className='button-group' onClick={() => {navigate('location')}}>
                            <Button>Our Location</Button>
                            <span></span>
                        </div>
                </Col>
            </Row>
            <Row id="gallery" className='d-flex justify-content-center'>
                <Col md={11} lg={9} xl={7}>
                    <Row id="grid-top">
                        <Col xs={{order: 2}} md={{order: 1, span: 4}} lg={4} className="info">
                            <p className='title'>Your Day at the Gallery</p>
                            <p>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
                        </Col>
                        <Col xs={{order: 1}} md={{order: 2, span: 8}} lg={{offset: 1,span: 7}} className='image-container'>
                            <img src={require('../assets/desktop/image-grid-1.jpg')} alt="grid 1" width={'100%'}/>
                        </Col>
                    </Row>
                    <Row id="grid-bottom">
                        <Col>
                            <img src={require('../assets/desktop/image-grid-2.jpg')} alt="grid 2" className='row-2'/>
                            <img src={require('../assets/desktop/image-grid-3.jpg')} alt="grid 3" width={'100%'}/>
                            <div className='info'>
                                <p className='title'>COME & BE INSPIRED</p>
                                <p>We’re excited to welcome you to our gallery and see how our collections influence you.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row id='footer'>
                <Col md={3} lg={3} xl={2} className="title">
                    <p>MODERN</p>
                    <p>ART GALLERY</p>
                </Col>
                <Col md={6} lg={5} xl={8} className="info">
                    <p>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
                </Col>
                <Col md={3} lg={4} xl={2} className="icons">
                    <img src={facebook} alt='facebook'/>
                    <img src={instagram} alt='instagram'/>
                    <img src={twitter} alt='twitter'/>
                </Col>
            </Row>
        </>
    )
}