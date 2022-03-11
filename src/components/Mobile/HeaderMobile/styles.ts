import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 95.5px;
    position: relative;
`
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    

    width: 90%;
    max-width: 800px;
    height: 58.5px;

    position: absolute;
    bottom: 0;

    .logo-mobile {
        width: 171px;
        height: 33px;
    }

    button {
        background-color: transparent;

        img {
            width: 24px;
            height: 33px;

        cursor: pointer;

        transition: width .6s;

            &:hover {
                width: 30px;
            }
        }
        margin-bottom: 30px;
    }
`

