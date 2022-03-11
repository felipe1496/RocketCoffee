import React from 'react';
import Button from '../../Button';

import Coffee from '../../../assets/Coffee.png';

import { Container, Title } from './styles';

const ContentMobile: React.FC = () => {
    return (
        <Container>
            <span>
                O café que fará seu <br />
                código decolar para <br />
                o próximo nível.
            </span>

            <Button className='button' haveArrow>
                Pegar meu café
            </Button>

            <Title>
                <strong>Great Coffe</strong>
                <p>&lt;Great Code/&gt;</p>
            </Title>

            <img src={Coffee} alt="Coffees" />

        </Container>
    );
}

export default ContentMobile;