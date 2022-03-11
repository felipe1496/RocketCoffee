import React, { useContext } from 'react';

import LogoMobile from '../../../assets/logomobile.svg';
import MenuBuguerOpen from '../../../assets/menu-buguer-open.svg';
import MenuBuguerClose from '../../../assets/menu-buguer-close.svg';

import { Container, Content } from './styles';

import { SideBarIsOpenContext } from '../../../App'

const HeaderMobile: React.FC = () => {
    const { value, setValue } = useContext(SideBarIsOpenContext)
    return (
        <Container>
            <Content>
                <img className='logo-mobile' src={LogoMobile} alt="RocketSeat" />
                <button onClick={() => setValue(!value)}>
                    <img src={value ?
                        MenuBuguerClose : MenuBuguerOpen
                    } alt="Menu-open" />
                </button>
            </Content>
        </Container>
    );
}

export default HeaderMobile;