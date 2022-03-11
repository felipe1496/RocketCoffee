import styled from 'styled-components';


export const Container = styled.div`
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;

    align-items: center;

    position: relative;
    overflow-y: hidden;
    overflow-x: hidden;

    > img {
        height: 60vh;

        position: absolute;

        bottom:0;
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 500;

    margin-top: 40px;
    > h1 {
        color: var(--text-color);
        font-size: 80px;
        font-weight: bold;
    }

    > p {
        font-size: 80px;
        font-weight: bold;
        text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), -1px 1px 0 var(--button), 1px 1px 0 var(--button);
    }
`