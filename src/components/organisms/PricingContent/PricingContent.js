import React from 'react';
import Container from 'components/particles/Container';
import PricingImage from 'components/atoms/PricingImage';
import PricingForm from 'components/molecules/PricingForm';
import Notification from 'components/organisms/Notification';
import S from './PricingContent.styles';

const PricingContent = () => {
  return (
    <Container axis="both" doubling="x">
      <S.Wrapper>
        <div>
          <S.Heading>Opowiedz nam o swoim pomyśle.</S.Heading>
          <Notification />
          <PricingForm />
        </div>
        <PricingImage />
      </S.Wrapper>
    </Container>
  );
};

export default PricingContent;