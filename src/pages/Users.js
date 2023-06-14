import React, {useState} from 'react';
import MyLink from "../components/UI/MyLink";
import {Col, Container, Row} from "react-bootstrap";
import MyBtn from "../components/UI/MyBtn";
import UserDialogWindow from "../components/UserDialogWindow";
import {useSelector} from "react-redux";
const Users = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const users = useSelector(state => state.users.users)
    const [index, setIndex] = useState(0)

    return (
        <div className={'d-flex align-items-center h-100'}>
            <Container className={'d-grid gap-4'}>
                <Row>
                    <Col md={{span: 6, offset: 3}} className={'d-flex justify-content-center'}>
                        <h1>Users</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 6, offset: 3}} className={'d-flex justify-content-center'}>
                        <MyBtn onClick={() => {
                            setModalShow(true)
                            setIndex(0)
                        }} name={'User1'} />
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 6, offset: 3}} className={'d-flex justify-content-center'}>
                        <MyBtn onClick={() => {
                            setModalShow(true)
                            setIndex(1)
                        }} name={'User2'} />
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 6, offset: 3}} className={'d-flex justify-content-center'}>
                        <MyBtn onClick={() => {
                            setModalShow(true)
                            setIndex(2)
                        }} name={'User3'} />
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 6, offset: 3}} className={'d-flex justify-content-center mt-5'}>
                        <MyLink url={'/'} name={'Back'} />
                    </Col>
                </Row>
            </Container>
            <UserDialogWindow
                show={modalShow}
                onHide={() => setModalShow(false)}
                user={users[index]}
            />
        </div>
    );
};

export default Users;