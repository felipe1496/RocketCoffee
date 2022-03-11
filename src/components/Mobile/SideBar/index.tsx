import React from 'react';

import { Container, Divisor } from './styles';


const SideBar: React.FC = () => {
    return (
        <Container>
            <a className='selected' href="#">Home</a>
            <Divisor />
            <a href="#">Menu</a>
            <Divisor />
            <a href="#">Recompensas</a>
            <Divisor />
            <a href="#">Gift Cards</a>
            <Divisor />
            <a href="#">Lojas</a>
            <Divisor />
        </Container>
    );
}

export default SideBar;