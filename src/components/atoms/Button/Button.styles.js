import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Link = styled(GatsbyLink)`
  text-decoration: none;
  text-align: center;
`;

const Button = styled.button`
  font-size: ${({ theme }) => theme.font.size.body.xxs};
  cursor: pointer;
  position: relative;
  display: block;
  width: 170px;
  color: ${({ priority, theme }) =>
    priority === 'primary' ? theme.color.dark : theme.color.white};
  background-color: ${({ priority, theme }) =>
    priority === 'primary' ? theme.color.white : theme.color.transparent};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 1em 2em;
  border: ${({ theme }) => `2px solid ${theme.color.white}`};
  z-index: ${({ theme }) => theme.zindex.level1};
  margin-bottom: 8px;
  transition: color 250ms ease-in-out;
  transition-delay: 50ms;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background-color: ${({ theme }) => theme.color.dark};
    transition: width 250ms ease-in-out;
  }

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.body.xs};
    width: 230px;
    margin-bottom: 12px;
  `}

  ${({ theme }) => theme.media.laptop`
    margin: 0 15px;
    width: 260px;
    transform: skew(-45deg);

  :hover {
    color: ${theme.color.white};

    ::before {
      width: 100%;
    }
  }
  `}

  span {
    display: block;

    ${({ theme }) => theme.media.laptop`
      transform: skew(45deg);
    `}
  }
`;

export default { Link, Button };
