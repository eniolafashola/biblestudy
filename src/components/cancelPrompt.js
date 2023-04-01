import { View, Text, StyleSheet } from 'react-native';
import { color } from '../utils/color';

const HeadingBox = ({clickIcon}) => (
	<View style={styles.container}>
		<Text style={styles.text}>BIBLE STUDY</Text>
		<View style={styles.click}>
			{clickIcon}
		</View>
	</View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.transparent,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
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