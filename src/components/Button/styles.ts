import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--button);
    border-radius: 6px;
    
    padding: 11px 38px;

    text-transform: uppercase;
    flex-shrink: 0;

    font-size: 11px;

    cursor: pointer;

    a {
        color: var(--text-color);
        font-weight: 800;   
    }

    transition: font-size .6s, text-shadow .6s, background-color .6s;

    &:hover {
        text-shadow: 0 0 5px var(--text-color);
        font-size: 12px;
        background-color: var(--button);
    }

    
    

`