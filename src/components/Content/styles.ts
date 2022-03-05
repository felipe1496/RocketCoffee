import styled from 'styled-components';


export const Container = styled.div`
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;

    align-items: center;

    position: relative;

    > img {
        width: 798.78px;
        height: 506.47px;

        position: absolute;

        bottom:0;
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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