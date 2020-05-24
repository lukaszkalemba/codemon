import React from 'react';
import Button from 'components/common/Button';
import Heading from 'components/common/Heading';
import S from './Notification.styles';

const Notification = () => {
  return (
    <S.Wrapper>
      <Heading>Poszło!</Heading>
      <p>Odezwiemy się do Ciebie w ciągu 24.</p>
      <Button priority="secondary" path="/">
        Powrót do strony głównej
      </Button>
    </S.Wrapper>
  );
};

export default Notification;
