import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import FooterLogo from 'components/atoms/FooterLogo';
import Copyright from 'components/atoms/FooterCopyright';
import CompanyInformations from 'components/molecules/CompanyInformations';
import FooterLinks from 'components/molecules/FooterLinks';
import SocialMediaIcons from 'components/molecules/SocialMediaIcons';
import Container from 'components/particles/Container';
import S from './Footer.styles';
import animations from './Footer.animations';

const Footer = () => {
  const animation = useAnimation();

  const [footerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <S.Footer
      ref={footerRef}
      animate={animation}
      initial="initial"
      variants={animations.footerVariants}
    >
      <Container axis="both">
        <S.TopBar>
          <CompanyInformations variants={animations.childrenVariants} />
          <FooterLogo />
          <SocialMediaIcons variants={animations.socialMediaIconsVariants} />
        </S.TopBar>
      </Container>

      <Container axis="x">
        <S.BottomBar variants={animations.childrenVariants}>
          <Copyright />
          <FooterLinks />
        </S.BottomBar>
      </Container>
    </S.Footer>
  );
};

export default Footer;
