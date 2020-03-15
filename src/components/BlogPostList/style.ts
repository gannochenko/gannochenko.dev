import styled from 'styled-components';

export const BlogPostListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${({ theme }) => theme.util.grid({ gutters: { all: '1rem' } })};
    margin-bottom: 2rem;
`;

export const Item = styled.div`
    ${({ theme }) => theme.util.cell({ lg: 4, md: 6, sm: 12, xs: 12 })}
`;
