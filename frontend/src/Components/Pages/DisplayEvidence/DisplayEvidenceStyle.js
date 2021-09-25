import styled from 'styled-components';


export const PageWrapper = styled.div`
    display: grid;
    place-content: center;
    height: 82vh;
    padding-bottom: 50px;

    background-color: #345B63;

    /* background-image: url('/testBackground.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat; */
`;

export const PageContainer = styled.div`
    display: grid;
    place-content: center;
    height: 100%;
`;

export const Data = styled.div`
    --width: 1000px;

    display: flex;
    padding: 1em;
    flex-direction: column;
    gap: 0.5em;
    width: var(--width);
    background-color: white;

    text-align: center;

    border: 1px;
    border-style: solid;
    border-color: lightblue;
`;

export const PageHeader = styled.h2`
    display: grid;
    place-content: center;
    color: #fff;
    font-size: 45px;
    font-weight: 800;
    text-transform: capitalize;
    margin-bottom: 15px;
`;

export const DisplayButton = styled.button`
    width: 300px;
    height: 100%;
    background-color: #8d99af;
    border: none;
    padding: 15px;
    color: #fff;
    font-size: 15px;
    border-radius: 7px;
`;