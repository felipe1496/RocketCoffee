import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    flex: 1;
    

    a{
        font-size: 14px;
        color: var(--text-color-menu-mobile);
        position: relative;
    }

    a:after {
        content: '';
        position: absolute;
        background-color: var(--button);
        height: 3px;
        width: 0;
        left: 0;
        bottom: -10px;
        transition: 0.3s;
    }

    a:hover:after {
        width: 100%;
    }

    a:hover {
        color: var(--text-color);
    }
 
    a:not(:first-child) {
        margin-left: 50px;
    }


`