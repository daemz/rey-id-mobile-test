import * as React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';
import defaultStyles from './styles';

export interface ILayout extends ViewProps {
  testID?: string;
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const Layout = ({
  testID,
  children,
  style,
  ...viewProps
}: ILayout): React.ReactElement => (
  <View testID={testID} style={[defaultStyles.layout, style]} {...viewProps}>
    {children}
  </View>
);

export default React.memo(Layout);
