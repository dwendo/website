import { ColoredText } from './styled';
import { EmphasisText } from './styled-invalid';
import { EmphasisText as EmphasisTextObject } from './styled-object';
import { TransientProps } from './styled-transient-props';
import { EmphasisText as EmphasisTextCssProp } from './css-prop';
import { EmphasisText as EmphasisTextCssPropString } from './css-prop-string';
import { ZoomOnHover } from './class-names';
import { ZoomOnHoverCAF } from './class-names-caf';
import { Dynamic } from './class-names-dynamic';
import { StylusBuiltInFunctions } from './stylus-built-in-functions';
import { CompositionObject } from './composition-obj';
import { CompositionOrder } from './composition-order';
import { CompositionImports } from './composition-imports';

export const styled = {
  ColoredText,
  EmphasisText,
  TransientProps,
  EmphasisTextObject,
};

export const cssProp = {
  EmphasisText: EmphasisTextCssProp,
  EmphasisTextString: EmphasisTextCssPropString,
};

export const classNames = {
  ZoomOnHover,
  ZoomOnHoverCAF,
  Dynamic,
};

export const stylus = {
  StylusBuiltInFunctions,
};

export const composition = {
  CompositionObject,
  CompositionOrder,
  CompositionImports,
};
