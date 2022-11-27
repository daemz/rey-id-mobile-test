import * as appTheme from '@assets/custom-theme.json';
import InitializeApp from '@hoc/InitializeApp';
import HomeNavigator from '@navigators/Home';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './store';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@utils/navigators';

const App = (): React.ReactElement => {
  const queryClient = new QueryClient();

  const [isLoading, setIsLoading] = React.useState(true);

  const someInitialAction = async () => {
    // some initial actions should be here
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialSetup = async (): Promise<void> => {
    // do initial setup here
    // such as calling initial api to collect initial data or something
    await someInitialAction();
  };

  React.useEffect(() => {
    setIsLoading(false);
    initialSetup();
  }, [initialSetup]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appTheme['color-white']}
      />
      <QueryClientProvider client={queryClient}>
        <StoreProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <InitializeApp>
              <SafeAreaProvider>
                <NavigationContainer ref={navigationRef}>
                  <HomeNavigator />
                </NavigationContainer>
              </SafeAreaProvider>
            </InitializeApp>
          </PersistGate>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
