import {IPokemonMenuItem} from '@appTypes/poke.type';
import {Layout} from '@components';
import {EMenuName, menuItem} from '@constants/drawerMenu.const';
import * as React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

export interface IDrawerComponent {
  onMenuPress?: (nav: string) => void;
  selectedMenu?: EMenuName;
}

const DrawerComponent = ({
  onMenuPress,
  selectedMenu = EMenuName.HOME,
}: IDrawerComponent) => {
  const renderMenuItemButton = (item: IPokemonMenuItem, index: number) => {
    const isSelected = selectedMenu === item?.name;
    const textStyle = isSelected ? styles.textActive : styles.textInactive

    return (
      <Pressable
        onPress={() => onMenuPress(item?.navigationName)}
        style={[styles.menuButton, index > 0 && styles.topLine]}>
        <Text style={textStyle}>{item?.name}</Text>
      </Pressable>
    );
  };

  return (
    <Layout style={styles.drawerLayout}>
      {menuItem.map((item, index) => renderMenuItemButton(item, index))}
    </Layout>
  );
};

export default DrawerComponent;
