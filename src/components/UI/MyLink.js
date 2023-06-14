import React from 'react';
import {Link} from "react-router-dom";

const MyLink = ({name, url, onClick}) => {
    return (
        <Link className={'btn btn-outline-light w-100'} onClick={onClick} to={url}>{name}</Link>
    );
};

export default MyLink;