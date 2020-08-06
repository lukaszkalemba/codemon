import React from 'react';
import PropTypes from 'prop-types';
import ScrollArrow from 'components/atoms/ScrollArrow';
import BlogPostHeroContent from 'components/molecules/BlogPostHeroContent';
import S from './BlogPostHero.styles';
import animations from './BlogPostHero.animations';

const BlogPostHero = ({ title, description, image }) => {
  return (
    <S.Background fluid={image.fluid}>
      <S.Overlay>
        <BlogPostHeroContent
          title={title}
          description={description}
          animations={animations}
        />

        <S.ScrollWrapper
          variants={animations.scrollWrapperVariants}
          initial="initial"
          animate="animate"
        >
          <ScrollArrow />
        </S.ScrollWrapper>
      </S.Overlay>
    </S.Background>
  );
};

BlogPostHero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.object,
  }).isRequired,
};

export default BlogPostHero;
