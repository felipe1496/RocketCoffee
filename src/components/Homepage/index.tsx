import React from 'react';

import Header from '../Header';
import Content from '../Content';

import { Container, BlurRight, BlurLeft } from './styles';

const Homepage: React.FC = () => {
    return (
        <Container>
            <Header />
            <Content />
            <BlurRight />
            <BlurLeft />
        </Container>

    );
}

export default Homepage;