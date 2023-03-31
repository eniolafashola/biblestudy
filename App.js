//import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import AppContainer from './AppContainer';

import { ScoreProvider } from './src/contexts/data.context';
import { PageProvider } from './src/contexts/page.context';

export default function App() {
  
  return (
  	  <PageProvider>
  	  	<ScoreProvider>
				<SafeAreaView style={styles.container}>
					<AppContainer />
					<StatusBar style="auto" />
				</SafeAreaView>
			</ScoreProvider>
		</PageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    alignItems: 'center',
  },
});
