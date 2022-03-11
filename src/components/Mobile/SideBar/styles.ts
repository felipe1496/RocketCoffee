import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    position: absolute;

    background-color: #000;

    z-index: var(--drawer-z-index);

    a {
        text-decoration: none;
        color: var(--border-menu-mobile);
        padding: 18px 0 14px 31px;
    }

    .selected {
        color: var(--text-color-menu-mobile);
        display: flex;
        padding: 17px 0 14px 25px;

        border-left: 5px solid var(--button);
    }
`

export const Divisor = styled.div`
    background-color: var(--border);
    width: 100%;
    height: 1px;
`