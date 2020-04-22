import styled, { keyframes } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const linkHover = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0px) rotate(30deg);

  }

  10% {
    opacity: 1;
  }


  100% {
    opacity: 0;
    transform: translateX(80px)  rotate(30deg);
  }
`;

const ListItem = styled.li`
  align-items: flex-start;
  display: flex;
  padding: 15px;

  ${({ theme }) => theme.media.tablet`
    padding: 20px 55px;
  `}

  ${({ theme }) => theme.media.laptop`
    padding: 0;
    margin-left: 130px;
  `}
`;

const Link = styled(GatsbyLink)`
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  text-decoration: none;
  font-weight: bold;
  opacity: 0.85;
  transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
  position: relative;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.xl};
  `}

  ${({ theme }) => theme.media.laptop`
    font-size: ${theme.font.size.xxs};
    font-weight: ${theme.font.weight.regular};
    opacity: 0.75;
    padding: 5px 0;
  `}

  ::before {
    counter-increment: nav;
    content: '0' counter(nav);
    display: block;
    height: 100%;
    opacity: 0;
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.xxs};
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;

    ${({ theme }) => theme.media.laptop`
      display: none;
    `}
  }

  ::after {
    content: '';
    position: absolute;
    display: none;
    height: 20px;
    width: 2px;
    transform: rotate(30deg);
    left: -15px;
    top: 0;
    background-color: ${({ theme }) => theme.color.primary};
    opacity: 0;

    ${({ theme }) => theme.media.laptop`
      display: block;
    `}
  }

  :hover {
    transform: translateX(15px);
    opacity: 1;

    ::before {
      opacity: 0.5;
      transform: translateX(-10px);
    }

    ::after {
      animation: ${linkHover} 500ms;
      animation-fill-mode: forwards;
    }

    ${({ theme }) => theme.media.laptop`
      transform: scale(1.05);
    `}
  }
`;

export default { ListItem, Link };
