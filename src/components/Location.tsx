import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'
import logo from '../assets/logo-dark.svg'
import '../sass/location.scss'

export default function Location() {
    const navigate = useNavigate()
    return(
        <>
            <Row id="map">
                <img src={require('../assets/desktop/image-map.png')} alt="desktop map" className='d-none d-md-block'/>
                <img src={require('../assets/tablet/image-map.png')} alt="tablet map" className='d-none d-sm-block d-md-none'/>
                <img src={require('../assets/mobile/image-map.png')} alt="mobile map" className='d-block d-sm-none'/>
                <div className='button-group' onClick={() => {navigate('/')}}>
                    <span></span>
                    <Button>BACK TO HOME</Button>
                </div>
            </Row>
            <Row id="location">
                <Col xs={12} md={6} className='title'>
                    <p>OUR</p>
                    <p>LOCATION</p>
                </Col>
                <Col xs={12} md={6} className='address'>
                    <div className='street'>99 KING STREET</div>
                    <div className='city'>
                        <p>Newport</p>
                        <p>RI 02840</p>
                        <p>United States of America</p>
                    </div>
                    <div className='info'>
                        <p>Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
                    </div>
                </Col>
            </Row>
            <Row id='location-footer'>
                <Col md={3} lg={3} xl={2} className="title">
                    <img src={logo} alt="logo" />
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