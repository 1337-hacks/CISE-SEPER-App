import styled from "styled-components";

export const LayoutWrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

& main {
    flex-grow: 1;
}
`;