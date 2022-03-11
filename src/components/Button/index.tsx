import React from 'react';

import Arrow from '../../assets/arrow.svg';

import { Container } from './styles';

interface Props {
    haveArrow?: boolean;
    className?: string;
}

const Button: React.FC<Props> = ({
    children,
    haveArrow,
    className
}) => {
    return (
        <Container className={className}>
            <a href="#">{children}</a>
            {haveArrow ? <img src={Arrow} /> : null}
        </Container>
    );
}

export default Button;