import React from 'react';
import MyLink from "../components/UI/MyLink";
import {Col, Container, Row} from "react-bootstrap";

const NavPage = () => {
    return (
        <Container className={'h-100 w-100'}>
            <Row className={'justify-content-center align-items-center h-100'}>
                <Col sm={{span: 3}}>
                    <MyLink name={"Library"} url={'library'} />
                </Col>
                <Col sm={{span: 3}}>
                    <MyLink name={"Users"} url={'users'} />
                </Col>
            </Row>
        </Container>
    );
};

export default NavPage;