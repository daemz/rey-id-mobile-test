import * as React from 'react';
import {Text as TextNative} from 'react-native';

import styles, {statusColor} from './styles';
import {IText} from '@appTypes/text.type';
import {removeUndefinedAttributes} from '@utils/common';

const Text = ({
  adjustsFontSizeToFit = false,
  children,
  testID,
  color,
  flex,
  flexWrap,
  textAlign = 'auto',
  variant = 'body2',
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginHorizontal,
  marginVertical,
  fontWeight,
  height,
  numberOfLines = 0,
  ellipsizeMode = 'tail',
  status = 'basic',
  width,
  alignSelf,
  textDecorationLine,
  lineHeight,
  onPress,
}: IText): React.ReactElement => {
  const customStyle = removeUndefinedAttributes({
    color: color || statusColor[status],
    flex,
    flexWrap,
    textAlign,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginHorizontal,
    marginVertical,
    fontWeight,
    height,
    width,
    alignSelf,
    textDecorationLine,
    lineHeight,
  });

  return (
    <TextNative
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      onPress={onPress}
      testID={testID}
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[styles[variant], customStyle]}>
      {children}
    </TextNative>
  );
};

export default React.memo(Text);
