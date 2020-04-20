// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** @jsx jsx */
import { jsx } from '@emotion/core';

export const SVGContainer = ({ children, width = 100, height = 100, hidden = false }) => (
  <svg css={{ overflow: 'visible', width, height, position: 'absolute', left: 0, top: 0 }} aria-hidden={hidden}>
    {children}
  </svg>
);
