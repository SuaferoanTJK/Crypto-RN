import React from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';

const ModalInfo = ({data, coins, setData, setCoins}) => {
  const cleanForm = () => {
    setData({
      searchAPI: false,
      info: {},
      modalVisibility: false,
    });
    setCoins({
      currency: '',
      cryptocurrency: '',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.title}>
          <Text style={styles.titleLabel}>
            {coins.cryptocurrency} to {coins.currency}
          </Text>
        </View>
        <View style={styles.moreInfo}>
          <Text style={styles.text}>
            <Text style={styles.textBold}>Price: </Text>
            {data.info.PRICE}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.textBold}>Highday: </Text>
            {data.info.HIGHDAY}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.textBold}>Lowday: </Text>
            {data.info.LOWDAY}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.textBold}>24 hours variation: </Text>
            {data.info.CHANGEPCT24HOUR}%
          </Text>
          <Text style={styles.text}>
            <Text style={styles.textBold}>Last Update: </Text>
            {data.info.LASTUPDATE}
          </Text>
        </View>
        <TouchableHighlight
          style={styles.btnQuote}
          onPress={() => {
            cleanForm();
          }}>
          <Text style={styles.btnQuoteText}>Close</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#753BE0',
    flex: 1,
  },
  containerInfo: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  title: {marginBottom: 20},
  titleLabel: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'center',
  },
  moreInfo: {
    backgroundColor: '#5001AD',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 10,
  },
  textBold: {
    fontWeight: '700',
  },
  btnQuote: {
    backgroundColor: '#3909AB',
    padding: 10,
    borderRadius: 10,
  },
  btnQuoteText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },
});

export default ModalInfo;
