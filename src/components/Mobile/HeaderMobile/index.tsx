import React from 'react';

import LogoMobile from '../../../assets/logomobile.svg';
import MenuBuguerOpen from '../../../assets/menu-buguer-open.svg';
import MenuBuguerClose from '../../../assets/menu-buguer-close.svg';

import { Container, Content } from './styles';

const HeaderMobile: React.FC = () => {
    return (
        <Container>
            <Content>
                <img className='logo-mobile' src={LogoMobile} alt="RocketSeat" />
                <img className='menu-icon' src={MenuBuguerOpen} alt="Menu-open" />
            </Content>
        </Container>
    );

}

export default HeaderMobile;