import styled from 'styled-components';

export const ProjectListRoot = styled.div`
    margin-bottom: 2rem;
`;

export const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${({ theme }) => theme.util.grid({ gutters: { all: '1rem' } })};
`;

export const Item = styled.div`
    ${({ theme }) => theme.util.cell({ lg: 4, md: 6, sm: 12, xs: 12 })}
`;

export const LinkContainer = styled.div`
    margin-top: 2rem;
    //text-align: center;
`;
