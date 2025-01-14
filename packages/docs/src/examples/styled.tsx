import React from 'react';
import { readFileSync } from 'fs';
import { styled } from '@compiled/website-examples';
import { Example } from './example';

export const StyledExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/src/styled.tsx',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/styled.jsx',
        'utf-8'
      )}>
      <styled.ColoredText color="#FF5630">
        The Road Not Taken
      </styled.ColoredText>
    </Example>
  );
};

export const StyledInvalidExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/src/styled-invalid.tsx',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/styled-invalid.jsx',
        'utf-8'
      )}>
      <styled.EmphasisText massive>Ode to a Nightingale</styled.EmphasisText>
    </Example>
  );
};

export const StyledObjectExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/src/styled-object.tsx',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/styled-object.jsx',
        'utf-8'
      )}>
      <styled.EmphasisText massive>Ode to a Nightingale</styled.EmphasisText>
    </Example>
  );
};

export const StyledTransientProps = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/src/styled-transient-props.tsx',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/styled-transient-props.jsx',
        'utf-8'
      )}>
      <styled.TransientProps $color="red" color="black">
        Graf Nulin
      </styled.TransientProps>
    </Example>
  );
};
