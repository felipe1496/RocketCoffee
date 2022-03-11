import React from 'react';

import Coffee from '../../assets/Coffee.png';

import { Container, Title } from './styles';

const Content: React.FC = () => {
    return (
        <Container>
            <Title>
                <h1>Great Coffee</h1>
                <p>&lt;Great Code/&gt;</p>
            </Title>
            <img src={Coffee} alt="Coffees" />
        </Container>
    );
}

export default Content;