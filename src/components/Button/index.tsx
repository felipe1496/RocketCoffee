import React from 'react';
import Logo from '../../assets/Logo.svg';
import NavBar from '../NavBar';

import { Container } from './styles';

const Button: React.FC = ({
    children
}) => {
    return (
        <Container>
            <a href="#">{children}</a>
        </Container>
    );
}

export default Button;