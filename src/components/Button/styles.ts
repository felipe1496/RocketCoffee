import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 172px;

    border: 1px solid var(--button);
    border-radius: 6px;
    
    padding: 11px 32px;

    text-transform: uppercase;
    

    font-size: 11px;

    cursor: pointer;

    a {
        color: var(--text-color);
        font-weight: 800;   
        flex-shrink: 0;
    }

    transition: font-size .6s, text-shadow .6s, background-color .6s;

    &:hover {
        font-size: 12px;
        background-color: var(--button);
    }

    > img {
        margin-left: 13px;
        text-shadow: 0 0 5px var(--text-color);
    }
`