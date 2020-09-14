import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import S from './PricingImage.styles';
import animations from './PricingImage.animations';

const IMAGE_QUERY = graphql`
  {
    officeImage: file(relativePath: { eq: "photo_office.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

const PricingImage = () => {
  const { officeImage } = useStaticQuery(IMAGE_QUERY);

  return (
    <S.ImageWrapper {...animations.image}>
      <S.Image fluid={officeImage.childImageSharp.fluid} />
      <S.ImageShadow {...animations.imageShadow} />
    </S.ImageWrapper>
  );
};

export default PricingImage;
