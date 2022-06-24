import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Header = () => {
  return <Text style={styles.header}>Crypto</Text>;
};

const styles = StyleSheet.create({
  header: {
    color: '#753BE0',
    textAlign: 'center',
    fontSize: 45,
    fontWeight: '900',
    textTransform: 'uppercase',
    paddingTop: 35,
  },
});

export default Header;
