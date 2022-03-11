import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: calc(100% - 99px);


    span {
        color: var(--text-color);
        font-size: 30px;
        font-weight: 500;

        margin-top: 88.5px;

        text-align:center;
    }

    .button {
        margin-top: 100px;
    }

    > img {
        width: 428px;
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    margin-top: 98px;

    resize: none;

    strong {
        font-size: 3.125rem;
        color: var(--text-color);
    }

    p {
        font-size: 50px;
        font-weight: bold;
        text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), -1px 1px 0 var(--button), 1px 1px 0 var(--button);
        
    }
`