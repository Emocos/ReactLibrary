import React from 'react';
import {Card} from "react-bootstrap";

const Book = ({id, author, name, count, description}) => {
    return (
        <div>
            <Card
                bg={'dark'}
                text={'white'}
                style={{ width: '18rem', height: 'max-content'}}
                className="mb-2"
            >
                <Card.Header>{author}</Card.Header>
                <Card.Body >
                    <Card.Title className={''}>{name}</Card.Title>
                    <Card.Text className={'cardBody'}>
                        {description}
                    </Card.Text>
                    <h3>{count}</h3>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Book;