import styled from 'styled-components';

const Section = styled.section`
  padding: 20px 0;

  ${({ theme }) => theme.media.laptop`
    padding: 50px 0;
  `}

  ${({ theme }) => theme.media.desktop`
    padding: 70px 0;
  `}
`;

const Cards = styled.div`
  display: grid;
  max-width: 1300px;
  margin: 0 auto;
  grid-gap: 30px;
  margin-bottom: 35px;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    margin: 65px auto;
  `}

  ${({ theme }) => theme.media.laptop`
    grid-gap: 50px;
  `}

  ${({ theme }) => theme.media.desktop`
    grid-gap: 90px;
    margin: 100px auto 60px;
  `}
`;

export default { Section, Cards };
