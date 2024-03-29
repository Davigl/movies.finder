import styled from 'styled-components';

import SpinnerImage from '~/assets/images/spinner-2.png';
import { pulse } from '~/assets/styles/partials/_animations';

const SpinnerWrapper = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;

  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

const Spinner = styled.img.attrs(() => ({
  src: SpinnerImage
}))`
  height: 100%;
  width: auto;
  animation: ${pulse} 1.2s linear infinite;
`;

export { SpinnerWrapper, Spinner };
