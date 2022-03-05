import React from 'react';

import { Container } from './styles';

const NavBar: React.FC = () => {
    return (
        <Container>
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">Recompensas</a>
            <a href="#">Gift Cards</a>
            <a href="#">Loja</a>
        </Container>
    );
}

export default NavBar;