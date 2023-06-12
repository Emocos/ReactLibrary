import React from 'react';
import MyLink from "../components/UI/MyLink";
import {Col, Container, Row} from "react-bootstrap";

const NavPage = () => {
    return (
        <Container className={'h-100 w-100'}>
            <Row className={'justify-content-center align-items-center h-100'}>
                <Col md={{span: 3}}>
                    <MyLink name={"Library"} url={'library'} bootstrapClass={'btn btn-outline-light w-100'}/>
                </Col>
                <Col md={{span: 3}}>
                    <MyLink name={"Users"} url={'users'} bootstrapClass={'btn btn-outline-light w-100'}/>
                </Col>
            </Row>
        </Container>
    );
};

export default NavPage;