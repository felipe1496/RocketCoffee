import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


    position: relative;

    background-color: var(--background);

`

export const Content = styled.div`
    
`

export const BlurRight = styled.div`
    position: absolute;
    width: 321px;
    height: 321px;

    right: 0;
    top: -63px;

    background: var(--button);

    filter: blur(200px);
`
export const BlurLeft = styled.div`
    position: absolute;
    width: 321px;
    height: 321px;

    left: -29px;
    bottom: 0;

    background: var(--button);

    filter: blur(200px);
`