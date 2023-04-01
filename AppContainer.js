import { useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { PageContext } from './src/contexts/page.context';

import MainPage from './src/pages/mainPage';
import QuizPage from './src/pages/quizPage';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
	
	/**useEffect(() => {
		navigation.navigate('MainPage');
	}, []);*/
	
  return (
  //  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainPage}
        //  options={{title: 'Welcome'}}
        />
        <Stack.Screen name="QuizPage" component={QuizPage} />
      </Stack.Navigator>
//    </NavigationContainer>
  );
};

/**export default function AppContainer() {
	const { currentPage, setCurrentPage } = useContext(PageContext);
	
	useEffect(() => {
		setCurrentPage(<QuizPage />);
	},[]);
  
    return <>{currentPage}</>;
  
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    alignItems: 'center',
  },
});

export default  AppContainer;
