import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#029c2e',
    paddingBottom: 20,
    paddingTop: 5,
  },
  header: {
    marginTop: 10,
    marginBottom: 3,
  },
  headerTitle: {
    paddingVertical: 8,
    paddingBottom: 12,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerSubTitle: {
    paddingBottom: 12,
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
  },
  title: {
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subTitle: {
    textAlign: 'center',
    paddingBottom: 15,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardTitle: {
    paddingVertical: 8,
    fontSize: 25,
    color: '#090',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  cardBtn: {
    backgroundColor: '#029c2e',
    color: '#fff',
  },

  cardImage: {
    position: 'relative',
    top: -30,
    borderColor: '#ccc',
    borderWidth: 2,
    elevation: 5,
    overflow: 'hidden',
  },
});

export default styles;
