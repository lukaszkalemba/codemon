import styled from 'styled-components';
import H2 from 'components/common/Heading';

const Wrapper = styled.div`
  margin-bottom: 125px;

  ${({ theme }) => theme.media.laptop`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 150px;
  `}
`;

const Heading = styled(H2)`
  max-width: 500px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;

  ${({ theme }) => theme.media.laptop`
    justify-content: center;
  `}
`;

export default { Wrapper, Heading, ButtonWrapper };
