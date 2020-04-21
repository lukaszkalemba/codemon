import styled from 'styled-components';

const Wrapper = styled.div`
  height: 90vh;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 450px 300px;
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.color.primary};
    opacity: 0.3;

    ${({ theme }) => theme.media.tablet`
      border-width: 0 0 700px 700px;
      opacity: 1;
    `}

    ${({ theme }) => theme.media.laptop`
      border-width: 0 0 700px 850px;
    `}

    ${({ theme }) => theme.media.desktop`
      border-width: 0 0 850px 1000px;
    `}


    ${({ theme }) => theme.media.largeDesktop`
      border-width: 0 0 880px 1100px;
    `}
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 13vh;
  padding: 0 30px;

  ${({ theme }) => theme.media.laptop`
    flex-direction: column-reverse;
    padding: 0;
    margin-top: 150px;
  `}
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 30px;

  ${({ theme }) => theme.media.tablet`
    margin-top: 40px;
  `}

  ${({ theme }) => theme.media.laptop`
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
    margin-left: 5vw;
  `}

  ${({ theme }) => theme.media.desktop`
    margin-left: 11vw;
  `}

  ${({ theme }) => theme.media.largeDesktop`
    margin-left: 18vw;
  `}
`;

export default { Wrapper, Content, Buttons };
