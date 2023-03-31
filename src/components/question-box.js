import { question } from '../question/question';
import { View, Text, StyleSheet } from 'react-native';

const QuestionBox = ({level, questionNo}) => (
	<View style={styles.container}>
		<Text style={styles.question}>
			{question[level][questionNo][0]}
		</Text>
	</View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    width: '100%',
 //   border: 'solid'
  },
  question: {
	color: 'white',
	fontSize: 25,
  },
});

export default  QuestionBox;
