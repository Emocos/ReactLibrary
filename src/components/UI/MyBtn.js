import React from 'react';

const MyBtn = ({name, onClick}) => {
    return (
        <button onClick={onClick} className={'btn btn-outline-light w-100'}>
            {name}
        </button>
    );
};

export default MyBtn;