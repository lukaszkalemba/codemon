import React from 'react';
import Container from 'components/commons/Container';
import Paragraph from 'components/index-page/HeroParagraph';
import Button from 'components/commons/Button';
import S from './Hero.styles';

const Hero = () => {
  return (
    <S.Wrapper>
      <Container axis="both">
        <S.Content>
          <S.Heading tag="h1">Zaistniej w sieci</S.Heading>
          <Paragraph>Zaistniej w świecie nieograniczonych możliwości</Paragraph>
        </S.Content>
        <S.Buttons>
          <Button priority="primary">Bezpłatna wycena</Button>
          <Button priority="secondary">Zrealizowane projekty</Button>
        </S.Buttons>
      </Container>
    </S.Wrapper>
  );
};

export default Hero;
