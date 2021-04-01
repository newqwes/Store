import { keyframes } from 'styled-components';

export const JITTER = keyframes`
  0% { transform:  rotate(5deg); }
  50% { transform:  rotate(-5deg); }
  100% { transform:  rotate(5deg); }
`;

export const SCALE = keyframes`
  50% { transform:  scale(1.1); }
`;
