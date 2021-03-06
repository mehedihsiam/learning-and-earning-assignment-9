import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Course.css'
const Course = (props) => {
    const { name, desc, duration, trainer, totalClasses, fees, img } = props.course;
    return (
        <div className="course my-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <Card.Text> {desc}</Card.Text>
                    <p className="title"><strong>Trainer: {trainer}</strong></p>
                    <p className="fw-bold">Total Classes: {totalClasses}</p>
                    <p className="fw-bold">Course Duration: {duration}</p>
                    <p className="fees fw-bold">Only ${fees}</p>
                    <Button variant="primary" className="btn btn-warning">Get Admission</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;