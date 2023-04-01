import { View, Text, StyleSheet } from 'react-native';
import { color } from '../utils/color';

const HeadingBox = ({title, clickIcon, navigation, doThis}) => {
	
	return(
		<View style={styles.container}>
			<Text style={styles.text}>{title}</Text>
			<View 
				style={styles.click} 
				onStartShouldSetResponder={doThis}
			>
				{clickIcon}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: color.head,
    borderBottomWidth: 2,
    borderColor: color.transparent,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
    border: 'solid'
  },
  text: {
    color: 'white',
   paddingLeft: 10,
	fontSize: 30,
    fontWeight: 'bold',
  },
  click: {
  	paddingRight: 10,
  }
});

export default HeadingBox;