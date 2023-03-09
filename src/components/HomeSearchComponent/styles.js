import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#e5e5e5',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6e6e6e',
  },
  timeContainer: {
    flexDirection: 'row',
    width: 100,
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});
export default styles;
