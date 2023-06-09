import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
                <Link className='btn btn-outline-dark' to={'library'}>Library</Link>
                <Link className='btn btn-outline-dark' to={'users'}>Users</Link>
            </nav>
        </div>
    );
};

export default Header;