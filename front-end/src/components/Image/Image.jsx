import React from 'react';
import PropTypes from 'prop-types';
import ImageWrapper from './styled';

const Image = ({ src, alt, height }) => (
  <ImageWrapper height={height}>
    <img src={src} alt={alt} />
  </ImageWrapper>
);

Image.propTypes = {
  height: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  height: '250px',
};

export default Image;
