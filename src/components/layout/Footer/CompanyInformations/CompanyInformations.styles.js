import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const A = styled.a`
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  transition: opacity 400ms ease-in-out;
  padding: 11px 0;
  opacity: 0.75;

  :hover {
    opacity: 1;
  }
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.white};
  opacity: 0.5;
  padding: 11px 0;
  margin: 0;
`;

export default { Wrapper, A, Paragraph };
