import styled from 'styled-components';
import ButtonComponent from 'components/atoms/Button';
import ParagraphComponent from 'components/atoms/Paragraph';

const Button = styled(ButtonComponent)`
  margin: 0 auto;
  margin-top: 50px;
`;

const Paragraph = styled(ParagraphComponent)`
  ${({ theme }) => theme.media.tablet`
    margin-top: -5px;
    margin-left: 20px;
  `}

  ${({ theme }) => theme.media.laptop`
    margin-left: 30px;
  `}
`;

export default { Button, Paragraph };
