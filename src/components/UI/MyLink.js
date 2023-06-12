import React from 'react';
import {Link} from "react-router-dom";

const MyLink = ({name, url, bootstrapClass}) => {
    return (
        <Link className={bootstrapClass} to={url}>{name}</Link>
    );
};

export default MyLink;