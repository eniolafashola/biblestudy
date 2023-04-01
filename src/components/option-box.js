import { useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { question } from '../question/question';
import { Option } from './atoms/option';
import { color } from '../utils/color';


const OptionBox = ({level, questionNo, checkAnswer}) => {
	const [ picked, setPicked ] = useState(null);
	
	const optionsArray = question[level][questionNo][1];
		
	useEffect(() => {
		checkAnswer(picked)
	},[picked]);
	
	useEffect (() => {
		setPicked(null)
	},[questionNo]);
	
	const options = optionsArray.map((content, index) => {
		
		const option = index == 0 ? 'A' : index == 1 
			? 'B' : index == 2 ? 'C' : 'D' ;	
		return <Option 
			key={index} 
			color= {picked === index ? color.active : 'white'}
			pick={()=> setPicked(index)}
			option={option} 
			content={content} 
		/>
	});
	
	return(
		<View style={styles.container}>
			<ScrollView style={styles.scroll}>
				{options}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    border: 'solid',
  },
  scroll: {
  	width: '100%',
  	
  },
});

export default  OptionBox;