import styled from 'styled-components';
import background from 'assets/images/photo_project-example.png';

const Article = styled.article`
  background: url(${background}) no-repeat;
  background-size: cover;
  background-position: center / center;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 450px;
  padding: 30px;
  cursor: pointer;

  :hover {
    div {
      opacity: 0.9;
    }
  }

  ${({ theme }) => theme.media.tablet`
    height: 550px;
    margin-top: ${({ isOffset }) => isOffset && '40px'};
  `}

  ${({ theme }) => theme.media.desktop`
    height: 750px;
    padding: 40px 50px;
  `}
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.dark};
  transition: opacity 250ms ease-in-out;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.size.s};
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive1};
  margin: 0;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.m};
  `}

  ${({ theme }) => theme.media.desktop`
    font-size: ${theme.font.size.l};
  `}
`;

export default { Article, Overlay, Title };
