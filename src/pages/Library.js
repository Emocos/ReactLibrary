import React from 'react';
import BooksList from "../components/BooksList";
import MyLink from "../components/UI/MyLink";
import './styles/Library.css'
import {Col, Container, Row} from "react-bootstrap";

const Library = () => {
    return (
        <div className={'Library'}>
            <Container className={'p-4'}>
                <h1>Our Books: </h1><br/>
                <Row>
                    <Col md={'12'}><BooksList/></Col>
                </Row>
                <Row>
                    <Col md={{ span: 3, offset: 9}}><MyLink name={'Back'} url={'/'} bootstrapClass={'btn btn-outline-light w-100'}/></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Library;