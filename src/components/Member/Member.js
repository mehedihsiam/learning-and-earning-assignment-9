import React from 'react';
import { Card } from 'react-bootstrap';

const Member = (props) => {
    const { name, designation, img } = props.member;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="round" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{designation}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Member;