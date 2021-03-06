import styled from 'styled-components';

export const CodeContainerRoot = styled.div`
    margin: 2rem 0;
`;

export const CodeContainerContainer = styled.div<{
    bgColor?: string;
    wide?: boolean;
}>`
    background-color: ${({ bgColor, wide }) =>
        wide ? bgColor : 'transparent'};

    line-height: 1.4rem;
    position: relative;
    min-height: 3rem;
    ${({ theme }) =>
        theme.util.media({
            xs: 'font-size: 1.1rem;',
        })}

    .token-line:last-child {
        display: none;
    }
`;

export const CodeKey = styled.div`
    position: absolute;
    top: 16px;
    left: 0.5rem;
    font-size: 1rem;
    color: ${props => props.color || 'inherit'};
    user-select: none;
`;

export const Wrapper = styled.div<{ bgColor: string; roundedTop?: boolean }>`
    background-color: ${props => props.bgColor};
    margin: 0 -1.5rem;
    padding: 0 1.5rem;
    border-radius: ${({ roundedTop }) => (roundedTop ? '5px' : '0 0 5px 5px')};
    overflow-x: auto;
`;

export const File = styled.div`
    background-color: beige;
    padding: 0.2rem 0.5rem;
    margin: 0 -1.5rem;
    border-radius: 5px 5px 0 0;
    font-size: 0.8rem;
`;
