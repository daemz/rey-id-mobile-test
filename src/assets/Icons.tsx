/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import {Icon, IconProps, IconElement} from '@ui-kitten/components';
import {ImageProps} from 'react-native';
import * as appTheme from '@assets/custom-theme.json';

export const CloseIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="close"
    fill={fill || appTheme['color-primary-500']}
  />
);

export const SearchIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 25}
    height={height || 25}
    name="search"
    fill={fill || appTheme['color-brik-font-white']}
  />
);
