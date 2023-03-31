import { useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { PageContext } from './src/contexts/page.context';

import QuizPage from './src/pages/quizPage';

export default function AppContainer() {
	const { currentPage, setCurrentPage } = useContext(PageContext);
	
	useEffect(() => {
		setCurrentPage(<QuizPage />);
	},[]);
  
    return <>{currentPage}</>;
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    alignItems: 'center',
  },
});
