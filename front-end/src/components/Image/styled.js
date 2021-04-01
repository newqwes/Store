import styled, { css } from 'styled-components';

const ImageWrapper = styled.div(
  ({ height }) => css`
    text-align: center;
    height: ${height};

    img {
      transition: 0.3s;
      position: absolute;
      height: ${height};
      cursor: pointer;
      left: 35px;
      top: 0;

      :hover {
        top: 5px;
      }
    }
  `,
);

export default ImageWrapper;
