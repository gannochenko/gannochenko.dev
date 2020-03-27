import styled from 'styled-components';

export const BlogPostPageContainerContainer = styled.div`
    margin-bottom: 4rem;
    color: #333;
    font-weight: 400;
    line-height: 2.2rem;
    ${({ theme }) =>
        theme.util.media({
            xs: 'font-size: 1.1rem;',
        })}
`;
