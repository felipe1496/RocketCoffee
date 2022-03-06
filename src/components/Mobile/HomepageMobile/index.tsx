import React from 'react';

import HeaderMobile from '../HeaderMobile';
import ContentMobile from '../ContentMobile';

import { Container, Divisor } from './styles';

const HomepageMobile: React.FC = () => {
    return (
        <Container>
            <HeaderMobile />
            <Divisor />
            {/* <ContentMobile /> */}
        </Container>
    );
}

export default HomepageMobile;