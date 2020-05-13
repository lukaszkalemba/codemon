import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import useWindowSize from 'hooks/useWindowSize';
import Container from 'components/common/Container';
import Link from 'components/common/Link';
import Service from 'components/index-page/Service';
import S from './Services.styles';
import animations from './Services.animations';

const IMAGES_QUERY = graphql`
  {
    design: file(relativePath: { eq: "photo_service-design.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    webapp: file(relativePath: { eq: "photo_service-webapp.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    ecommerce: file(relativePath: { eq: "photo_service-ecommerce.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

const Services = () => {
  const { design, webapp, ecommerce } = useStaticQuery(IMAGES_QUERY);
  const animation = useAnimation();
  const size = useWindowSize();

  const [wrapperRef, inView] = useInView({
    triggerOnce: true,
    threshold: size.width > 1150 ? 0.6 : 0.3,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <S.Section ref={wrapperRef}>
      <S.Header>
        <Container axis="both">
          <motion.div
            animate={animation}
            initial="initial"
            variants={animations.wrapperVariants}
          >
            <S.Title variants={animations.childrenVariants}>
              Stwórz z nami od zera niepowtarzalny projekt, lub przenieś już
              istniejący na kolejny poziom.
            </S.Title>
            <motion.div variants={animations.childrenVariants}>
              <Link to="/wycena">Bezpłatna wycena</Link>
            </motion.div>
          </motion.div>
        </Container>
      </S.Header>

      <motion.div
        animate={animation}
        initial="initial"
        variants={animations.wrapperVariants}
      >
        <Service
          img={design.childImageSharp}
          variants={animations.servicesVariants}
        >
          Projektowanie interfejsów
        </Service>
        <Service
          img={webapp.childImageSharp}
          variants={animations.servicesVariants}
        >
          Strony i aplikacje internetowe
        </Service>
        <Service
          img={ecommerce.childImageSharp}
          variants={animations.servicesVariants}
        >
          Sklepy internetowe
        </Service>
      </motion.div>
    </S.Section>
  );
};

export default Services;
