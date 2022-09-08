import styled from "styled-components";

const max_width = '1276px'
const padding = '1rem'

export const Container = styled.div`
    width: min(${max_width}, 100% - ${padding}*2);
    margin-inline: auto;
    padding: 64px 0px;
`

export const Columns = styled.div`
    display: grid;
    gap: 1rem;

    @media (min-width: 50em) {
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
    }
`