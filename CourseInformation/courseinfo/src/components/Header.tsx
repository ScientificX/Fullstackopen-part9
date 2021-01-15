import React from 'react';

interface Props{
    courseName: string
}

const Header : React.FC<Props> = ({courseName}) => {
    return(
        <div>
            <h1>{courseName}</h1>

        </div>
    )
}

export default Header;
