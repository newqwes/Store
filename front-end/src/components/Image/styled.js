import styled from 'styled-components';

const ImageWrapper = styled.div`
  text-align: center;
  height: 270px;

  img {
    transition: 0.3s;
    position: absolute;
    left: 35px;
    top: 0;

    :hover {
      top: 5px;
    }
  }
`;

export default ImageWrapper;
