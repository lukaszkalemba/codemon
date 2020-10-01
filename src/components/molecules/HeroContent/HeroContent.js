import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import Container from 'components/particles/Container';
import Button from 'components/atoms/Button';
import animations from './HeroContent.animations';
import S from './HeroContent.styles';

const HeroContent = () => {
  const size = useWindowSize();

  const buttonsAnimation = animations.getButtons(size);
  return (
    <Container axis="both">
      <S.Content>
        <S.Heading tag="h1" homePage animation={animations.heading}>
          Zaistniej w sieci
        </S.Heading>
        <S.Paragraph animation={animations.paragraph}>
          <span>Zaistniej w świecie&nbsp;</span>
          <span>nieograniczonych możliwości</span>
        </S.Paragraph>
      </S.Content>

      <S.Buttons {...buttonsAnimation}>
        <Button type="link" path="/wycena" priority="primary">
          Bezpłatna wycena
        </Button>
        <Button type="link" path="/projekty" priority="secondary">
          Zrealizowane projekty
        </Button>
      </S.Buttons>
    </Container>
  );
};

export default HeroContent;
