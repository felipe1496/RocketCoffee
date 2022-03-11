import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--background);
    width: 100%;
    height: 100%;

    position: absolute;

    overflow-y: hidden;
    overflow-x: hidden;

`

export const Divisor = styled.div`
    background-color: var(--border);
    width: 100%;
    height: 1px;
`

export const BlurCenter = styled.div`    
    position: absolute;
    width: 321px;
    height: 321px;

    top: 50%;
    left: 50%;

    margin-top: 180px;
    margin-left: -160.5px;

    background: var(--button);

    filter: blur(200px);

    
`

