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
    fill={fill || appTheme['color-black-50']}
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
    fill={fill || appTheme['color-black-50']}
  />
);

export const CloseIconFill = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 24}
    height={height || 24}
    name="close-circle"
    fill={fill || appTheme['color-black-50']}
  />
);

export const PlusIconFill = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 25}
    height={height || 25}
    name="plus-outline"
    fill={fill || appTheme['color-black-50']}
  />
);

export const MenuIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 27}
    height={height || 27}
    name="menu"
    fill={fill || appTheme['color-black-50']}
  />
);
