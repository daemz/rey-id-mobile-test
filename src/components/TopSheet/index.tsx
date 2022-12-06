import {assets} from '@assets/assets';
import {CloseIcon} from '@assets/Icons';
import {Layout} from '@components';
import * as React from 'react';
import {Image, Modal, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ITopSheet {
  visible: boolean;
  onClosePress?: () => void;
  children?: React.ReactNode;
}

const TopSheet = ({visible, onClosePress, children}: ITopSheet) => {
  const Header = () => {
    return (
      <Layout style={styles.headerMenu}>
        <Image
          source={assets.logo.pokemon_logo}
          style={styles.headerLeftIcon}
        />
        <TouchableOpacity style={styles.headerRightIcon} onPress={onClosePress}>
          <CloseIcon />
        </TouchableOpacity>
      </Layout>
    );
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      style={styles.modalContainer}>
      <Header />
      <ScrollView style={styles.scroll}>{children}</ScrollView>
    </Modal>
  );
};

export default React.memo(TopSheet);
