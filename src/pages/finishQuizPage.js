import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import { useContext } from 'react';
import { ScoreContext } from '../contexts/data.context';

import { color } from '../utils/color';

const FinishQuizPage = ({navigation}) => {
	const { currentScore, setCurrentScore } = useContext(ScoreContext);
	
	const contToStart = () => {
		navigation.navigate('MainPage');
	}
	
	return(
		<View style={styles.container}>
			<View style={styles.scoreboard}>
				<Text style={styles.score}>{currentScore}</Text>
				<Button 
					mode='contained' 
					onPress={contToStart}
					style={styles.but}>CONTINUE</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	width: '100%',
  	backgroundColor: color.body,
  	justifyContent: 'center'
  },
  scoreboard: {
  	flex: 0.6,
  	backgroundColor: color.white,
  	width: '80%',
  	alignSelf: 'center',
  	borderRadius: 10,
  	justifyContent: 'center'
  },
  score: {
  	color: color.body,
  	fontSize: 120,
  	textAlign: 'center'
  },
  but: {
  	backgroundColor: color.body,
  	width: '70%',
  	height: 40,
  	alignSelf: 'center',
  	justifyContent: 'center',
  	marginTop: 70
  }
});

export default FinishQuizPage;