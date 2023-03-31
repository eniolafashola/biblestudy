import { View, Text, StyleSheet } from 'react-native';
import { color } from '../utils/color';

const HeadingBox = () => (
	<View style={styles.container}>
		<Text style={styles.text}>BIBLE STUDY</Text>
	</View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.head,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
    border: 'solid'
  },
  text: {
    color: 'white',
    paddingLeft: 10,
	fontSize: 30,
    fontWeight: 'bold',
  }
});

export default HeadingBox;