import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  padding: 0 20px;
`;

const ButtonWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  max-width: 550px;

  ${({ theme }) => theme.media.laptop`
    justify-content: center;
  `}
`;

export default { Wrapper, ButtonWrapper };
