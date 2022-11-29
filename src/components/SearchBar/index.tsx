import {CloseIconFill} from '@assets/Icons';
import {Layout} from '@components';
import * as React from 'react';
import {Pressable, TextInput} from 'react-native';
import styles from './styles';

interface ISearchProps {
  value?: string;
  placeholder?: string;
  // onChangeText?: (text: string) => void
  onChangeText?: (text: string) => void;
  onSubmit?: () => void;
  onClearButton?: () => void;
}

const SearchBar = ({
  value,
  placeholder = 'Search something',
  onChangeText,
  onSubmit,
  onClearButton,
}: ISearchProps) => {
  return (
    <Layout style={styles.searchBarContainer}>
      <TextInput
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        onChangeText={text => (onChangeText ? onChangeText(text) : {})}
        onSubmitEditing={() => {
          if (value !== '') {
            onSubmit ? onSubmit() : {};
          }
        }}
      />
      {value !== '' && (
        <Pressable
          style={styles.clearIcon}
          onPress={() => (onClearButton ? onClearButton() : {})}>
          <CloseIconFill />
        </Pressable>
      )}
    </Layout>
  );
};

export default React.memo(SearchBar);
