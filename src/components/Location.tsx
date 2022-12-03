import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import '../sass/location.scss'

export default function Location() {
    return(
        <>
            <Row id="map">
                <img src={require('../assets/desktop/image-map.png')} alt="desktop map" className='d-none d-lg-block'/>
                <img src={require('../assets/tablet/image-map.png')} alt="tablet map" className='d-none d-md-block d-lg-none'/>
                <img src={require('../assets/mobile/image-map.png')} alt="mobile map" className='d-block d-md-none'/>
                <div className='button-group'>
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
        </>
    )
}