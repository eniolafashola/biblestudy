import * as React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar , Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppContainer from './AppContainer';
import MainPage from './src/pages/mainPage';
import QuizPage from './src/pages/quizPage';
import FinishQuizPage from './src/pages/finishQuizPage';

import { color } from './src/utils/color';

import { ScoreProvider } from './src/contexts/data.context';
import { PageProvider } from './src/contexts/page.context';


const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
  	  <NavigationContainer>
  		<ScoreProvider>
			<Stack.Navigator screenOptions={{headerShown: false}}>
       		<Stack.Screen
					name="MainPage"
         		   component={MainPage}
       		/>
       		<Stack.Screen 
			   	name="QuizPage" 
				   component={QuizPage} 
				/>
				<Stack.Screen 
			   	name="FinishQuizPage" 
				   component={FinishQuizPage} 
				/>
  		</Stack.Navigator>
		  <StatusBar style="auto" />
		 </ScoreProvider>
	   </NavigationContainer>
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
