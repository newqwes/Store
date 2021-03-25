import styled, { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
  0% { transform: translate(2px, 2px) rotate(4deg); }
  50% { transform: translate(1px, 1px) rotate(0deg); }
  100% { transform: translate(2px, 2px) rotate(4deg); }
`;

const PenWrapper = styled.span`
  position: absolute;
  right: 0;
  cursor: pointer;

  animation-name: ${breatheAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;

  &:hover {
    animation: none;
  }
`;

export default PenWrapper;
