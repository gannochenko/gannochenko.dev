import styled from 'styled-components';
import { align, gap, round } from '@gannochenko/etc';

export const AboutAuthorRoot = styled.div`
    ${({ theme }) =>
        theme.util.grid({
            guttersW: { xs: '0', all: '1rem' },
            guttersH: { xs: '1.5rem' },
        })}
    ${align('center', 'left')}
    width: 100%;
    margin-top: 0rem;
`;

export const AboutAuthorRootLeft = styled.div`
    ${({ theme }) => theme.util.cell({ xs: 12, all: 4 })}
    ${align('top', 'center')}
`;

export const AboutAuthorHelloRight = styled.div`
    ${({ theme }) => theme.util.cell({ xs: 12, all: 8 })}
    ${({ theme }) => theme.util.media({ xs: align('top', 'center', 'column') })}
`;

export const AboutAuthorNameBlock = styled.h1`
    font-family: ${({ theme }) => theme.typography.fontFamilyName};
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    font-size: ${props => props.theme.fontSize.large};
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    ${({ theme }) => theme.util.media({ xs: 'text-align: center;' })}
`;

export const AboutAuthorGreetingBlock = styled.div`
    letter-spacing: 0.05rem;
    line-height: 1.4;
    ${({ theme }) => theme.util.media({ xs: 'text-align: center;' })}
`;

export const AboutAuthorAvatarWrapper = styled.div`
    border: 5px solid #ce4f4f;
    ${round()}
`;
