import styled from 'styled-components';

export const CodeContainerContainer = styled.div<{ bgColor: string }>`
    background-color: ${props => props.bgColor};
    padding: 1rem 0 0.1rem 0;
    line-height: 1.4rem;
    ${({ theme }) =>
        theme.util.media({
            xs: 'font-size: 1.1rem;',
        })}
`;

export const CodeKey = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 0.5rem;
    font-size: 1rem;
    color: ${props => props.color || 'inherit'};
    user-select: none;
`;
