import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import animations from './CompanyInformations.animations';
import S from './CompanyInformations.styles';

const CompanyInformations = () => {
  const animation = useAnimation();

  const [wrapperRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  const wrapperAnimations = animations.getWrapper(animation);

  return (
    <S.Wrapper ref={wrapperRef} {...wrapperAnimations}>
      <S.Link href="tel:+48797709856">+48 797 709 856</S.Link>
      <S.Link href="mailto:kontakt@lukaszkalemba.pl">
        kontakt@lukaszkalemba.pl
      </S.Link>
      <S.Paragraph>REGON: 000000000</S.Paragraph>
      <S.Paragraph>KRS: 0000000000</S.Paragraph>
    </S.Wrapper>
  );
};

export default CompanyInformations;
