import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './CourseHome.css'

const CourseHome = (props) => {
    const { name, desc, duration, trainer, totalClasses, fees, img } = props.course;
    return (
        <div className="courseHome my-5" >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <Card.Text> {desc}</Card.Text>
                    <p className="title"><strong>Trainer: {trainer}</strong></p>
                    <p>Total Classes: {totalClasses}</p>
                    <p>Course Duration: {duration}</p>
                    <p className="fees fw-bold">Only ${fees}</p>
                    <Button variant="primary" className="btn btn-warning">Get Admission</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CourseHome;