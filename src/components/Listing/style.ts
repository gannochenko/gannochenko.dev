import styled from 'styled-components';

export const Copy = styled.div<{ copied: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.2rem;
    padding: 0.2rem 0.5rem;
    border-radius: 2px;
    background-color: white;
    &:before {
        content: '${({ copied }) => (copied ? 'Copied' : 'Copy')}';
    }
    font-size: ${({ theme }) => theme.fontSize.small};
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
    transition: opacity 200ms ease;
    cursor: pointer;
`;
