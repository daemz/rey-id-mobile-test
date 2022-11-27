/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native Main
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useFetchUser} from '@services/User';
import {useSelector} from 'react-redux';
import {RootState} from '@store/index';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Section = ({children, title}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Main = () => {
  const {tokenData, userDetail} = useSelector(
    (state: RootState) => state?.user,
  );
  const navigation = useNavigation<any>();

  console.info('tokenData: ', tokenData);
  console.info('userDetail: ', userDetail);

  const isDarkMode = useColorScheme() === 'dark';

  const {refetch: refetchUserData} = useFetchUser({
    enabled: false,
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const fetchUserData = async (): Promise<any> => {
    try {
      const {data} = await refetchUserData();
      console.info('data fetched nih coy: ', data);

      return data;
    } catch (err) {
      console.error('error fetchUserData: ', err);
      throw err;
    }
  };

  React.useEffect(() => {
    (async () => {
      await fetchUserData();
    })();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <LearnMoreLinks />
          <Pressable
            onPress={() => {
              navigation.navigate('Second', {shouldShowButton: false});
            }}
            style={styles.bottomButton}>
            <Text>Go to second screen</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
