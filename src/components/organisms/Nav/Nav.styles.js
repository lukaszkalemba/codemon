import styled from 'styled-components';
import { motion } from 'framer-motion';

const Header = styled(motion.header)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.level3};
  height: 13vh;

  ${({ theme }) => theme.media.laptop`
    opacity: 0;
  `}
`;

const Nav = styled.nav`
  ${({ theme }) => theme.media.laptop`
    display: flex;
    justify-content: space-between;
  `}
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default { Header, Nav, TopBar };
