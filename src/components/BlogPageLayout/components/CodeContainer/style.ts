import styled from 'styled-components';

export const CodeContainerContainer = styled.div<{ bgColor: string }>`
    background-color: ${props => props.bgColor};
    padding: 1rem 0 0.1rem 0;
    line-height: 1.4rem;
`;
