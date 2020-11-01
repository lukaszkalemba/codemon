import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  ${({ theme }) => theme.media.tablet`
    padding: 40px 50px;
  `}

  ${({ theme }) => theme.media.laptop`
    padding: 30px 40px;
  `}
`;

const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.body.xs};
  line-height: 25px;
  max-width: 450px;
  margin: 0 20px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.body.s};
    margin-left: 0 30px;
  `}

  ${({ theme }) => theme.media.laptop`
    max-width: 600px;
  `}
`;

export default { Wrapper, Description };
