import styled from 'styled-components';

export const Color = styled.span<{ color: string; marginLeft?: string }>`
    background-color: ${props => props.color};
    margin-left: ${props => props.marginLeft || 0};
    height: 20px;
    width: 20px;
    border-radius: 2px;
    border: 1px solid #282828;

    display: inline-block;
    position: relative;
`;
