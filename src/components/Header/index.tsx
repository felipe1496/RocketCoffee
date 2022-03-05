import React from 'react';

import Logo from '../../assets/Logo.svg';
import Button from '../Button';
import NavBar from '../NavBar';

import { Container } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <img src={Logo} alt="RocketSeat" />
            <NavBar />
            <Button>pegar meu café</Button>
        </Container>
    );
}

export default Header;