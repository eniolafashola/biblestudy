//import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const Option = ({color, pick, option, content}) => {

	return(
		<View 
			style={[styles.container, {backgroundColor: color}]}
			onStartShouldSetResponder={pick}>
			<Text style={styles.option}>{option}</Text>
			<Text style={[
				styles.text,{
					color: color === 'white' 
						? 'black' : 'white'
			}]}>{content}</Text>
		</View>
	)
};


const styles = StyleSheet.create({
  container: {
	//  backgroundColor: 'white',
	  borderRadius: 8,
	  width: '80%',
	  height: 'auto',
	  padding: 4,
	  marginBottom: 40,
	  flexDirection: 'row',
      textAlign: 'center',
      alignSelf: 'center'
  },
  option: {
  	color: 'green',
  	fontSize: 40,
  	width: '10%',
	  textAlign: 'center',
  //	backgroundColor: 'red'
  	
  },
  text: {
  	fontSize: 20 ,
  	width: '90%',
  	height: 'auto',
  	alignSelf: 'center',
  	paddingLeft: 2
  //	fontSize: 20,
      
  }
});
