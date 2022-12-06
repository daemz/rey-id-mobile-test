import {Text} from '@components';
import * as React from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {Portal} from 'react-native-paper';

import {Modalize, ModalizeProps} from 'react-native-modalize';
import {IHandles} from 'react-native-modalize/lib/options';
import styles from './styles';
import {CloseIcon} from '@assets/Icons';

interface IBottomSheetProps extends ModalizeProps {
  sheetRef: React.RefObject<IHandles>;
  height: number;
  title?: string;
  onClose?: () => void;
}

const BottomSheet: React.FC<IBottomSheetProps> = ({
  children,
  sheetRef,
  height,
  title,
  modalStyle,
  // overlayStyle,
  onClose = null,
  ...props
}) => {
  return (
    <Portal>
      <Modalize
        ref={sheetRef}
        snapPoint={height}
        modalHeight={height}
        useNativeDriver={true}
        handlePosition="inside"
        panGestureEnabled={false}
        modalStyle={[styles.modalContainer, modalStyle]}
        {...props}>
        {title && (
          <View style={styles.headerModal}>
            <Text variant="headline3" fontWeight="bold">
              {title}
            </Text>
            <Pressable onPress={onClose}>
              <CloseIcon />
            </Pressable>
          </View>
        )}
        <ScrollView contentContainerStyle={styles.scroll}>
          {children}
        </ScrollView>
      </Modalize>
    </Portal>
  );
};

export default BottomSheet;
