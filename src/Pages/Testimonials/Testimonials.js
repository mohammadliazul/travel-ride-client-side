import user1 from '../../Images/user-1.jpg'
import user2 from '../../Images/user-2.jpg'
import user3 from '../../Images/user-3.jpg'
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div className='container  py-5'>
            <div className='text-center testimonial-h-wrapper'>
                <h1 className='section-heading'>What Customers Say</h1>
                <h6 className='text-gray'>Our clients’ testimonials are the best proof of our high level of service</h6>

            </div>
            <div className=''>
                <Row className='mt-5'>
                    <Col xs={12} md={6} lg={4}>
                        <Card.Img variant="top" className='user mx-auto d-block' src={user1} />
                        <Card.Body className='testimonial-contents ps-5'>
                            <Card.Title className='text-center user-name'>JAMES SMITH</Card.Title>
                            <Card.Text>
                                <p>"I'd like to send you a sincere thank you for all of your assistance during my recent trip to Colorado. It was invaluable to me and I realize and appreciate it greatly."</p>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card.Img variant="top" className='user mx-auto d-block' src={user2} />
                        <Card.Body className='testimonial-contents ps-5'>
                            <Card.Title className='text-center user-name'>MARY ANDERSON</Card.Title>
                            <Card.Text>
                                <p>"Leslie was an excellent Travel Agent for us and considered our unique needs as she planned our itinerary. Every suggestion she made was excellent."</p>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card.Img variant="top" className='user mx-auto d-block' src={user3} />
                        <Card.Body className='testimonial-contents ps-5'>
                            <Card.Title className='text-center user-name'>WILL JOHNSON</Card.Title>
                            <Card.Text>
                                <p>"I would highly recommend Andy because everything on my month long trip to New Zealand, Australia and French Polynesia went without a hitch."</p>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Testimonials;