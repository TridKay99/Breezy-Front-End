import React from 'react';

const Nomatch = (props) => {
    const { pathname } = props.location
    return (     
        <h1>Error {pathname} not found</h1>
    )

}

export default Nomatch;