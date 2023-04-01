import { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import HeadingBox from '../components/heading-box';
import OptionBox from '../components/option-box';
import QuestionBox from '../components/question-box';
import { question } from '../question/question';

import { ScoreContext } from '../contexts/data.context';

import { color } from '../utils/color';


const QuizPage = ({navigation}) => {
	const [ buttonDisabled, setButtonDisabled ] = useState(true);
	const [ buttonBackground, setButtonBackground ] = useState(color.transparent);
	const [ picked, setPicked ] = useState(null);
    const [ questionIndex, setQuestionIndex ] = useState(0);
    
    const { currentScore, setCurrentScore } = useContext(ScoreContext);
  
    const pickAnswerNext = () => {
    	picked === question[0][questionIndex][2]
  	 	? setCurrentScore(currentScore + 1) : null;
  
		if(questionIndex >= question[0].length - 1) {
   	 	return navigation.navigate('FinishQuizPage');
        }
  
  		setQuestionIndex(questionIndex + 1);
    }
  
    const checkAnswer = (answer) => {
   	if(answer !== null) {
  		setPicked(answer);
   	   setButtonDisabled(false);
		  setButtonBackground(color.active);
	  }
    }
    
    const cancel = () => {
		navigation.navigate('MainPage');
	}
  
   useEffect (() => {
  	setButtonDisabled(true);
  	setButtonBackground(color.transparent);
   },[questionIndex]);
  
  return (
     <>
   	   <HeadingBox 
   		   title='Genesis'
		  	clickIcon={<Text>cancel</Text>}
			  doThis={cancel}
		  />
   	   <View style={styles.main}>
   		   <QuestionBox level={0} questionNo={questionIndex} />
      		<OptionBox 
			  	level={0} 
				  questionNo={questionIndex}
				  checkAnswer={checkAnswer}
			  />
          </View>
          <View style={styles.footer}>
          	<Button 
					mode='contained' 
					disabled={buttonDisabled} 
					onPress={pickAnswerNext}
					style={[
						styles.submit,{backgroundColor: buttonBackground 
				}]}>SUBMIT</Button>
          </View>
     </>  
  );
}

const styles = StyleSheet.create({
  main: {
  	flex: 8,
  	width: '100%',
  	backgroundColor: color.body
  },
  footer: {
  	flex: 1,
  	width: '100%',
  	backgroundColor: color.body,
  	justifyContent: 'center',
  },
  submit: {
  	color: 'white',
 	 width: '70%',
 	 height: 45 ,
 	 justifyContent: 'center',
 	 alignSelf: 'center',
  }
});


export default QuizPage;