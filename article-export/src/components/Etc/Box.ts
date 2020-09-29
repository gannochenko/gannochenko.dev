import styled from 'styled-components';

export const Box = styled.div<{ marginTop?: number; marginBottom?: number }>`
    margin-top: ${props => (props.marginTop ? `${props.marginTop}rem` : '0')};
    margin-bottom: ${props =>
        props.marginBottom ? `${props.marginBottom}rem` : '0'};
`;
