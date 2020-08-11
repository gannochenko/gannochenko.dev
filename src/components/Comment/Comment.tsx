import styled from 'styled-components';

export const Comment = styled.span<{ awesome: boolean }>`
  &:before {
    content: '// ${({ awesome }) => (awesome ? '🔥 ' : '')}';
  }
  color: ${({ theme }) => theme.color.secondary};
`;
