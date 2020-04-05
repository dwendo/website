import { styled } from '@compiled/css-in-js';

export const ScreenReaderText = styled.span`
  position: absolute;
  top: -99999px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`;