import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import MyBtn from "./UI/MyBtn";
import BookDialogWindow from "./BookDialogWindow";


const Book = ({id, author, name, count, description, editBook, allData}) => {
    const [modalShow, setModalShow] = React.useState(false);

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
                    <Card.Title className={'cardTitle'}>{name}</Card.Title>
                    <Card.Text className={'cardText'}>
                        {description}
                    </Card.Text>
                    <Container>
                        <Row className={'align-items-center'}>
                            <Col className={'d-flex justify-content-center'}>
                                <span>Left: {count}</span>
                            </Col>
                            <Col className={'d-flex justify-content-center'}>
                                <MyBtn onClick={() => {
                                    editBook()
                                    setModalShow(true)
                                }} name={'Edit'}/>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
            <BookDialogWindow
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default Book;