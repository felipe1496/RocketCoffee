import React, { useContext } from 'react';

import HeaderMobile from '../HeaderMobile';
import ContentMobile from '../ContentMobile';
import SideBar from '../SideBar';

import { Container, Divisor, BlurCenter } from './styles';

import { SideBarIsOpenContext } from '../../../App'

const HomepageMobile: React.FC = () => {
    const { value } = useContext(SideBarIsOpenContext)

    return (
        <Container>
            <HeaderMobile />
            <Divisor />
            {value ? <SideBar /> : null}
            <BlurCenter />
            <ContentMobile />
        </Container>
    );
}

export default HomepageMobile;