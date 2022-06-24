import React from 'react';
import {View, Text, TouchableHighlight, Alert, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Form = ({data, coins, crypto, setData, setCoins}) => {
  const handleForm = () => {
    const {currency, cryptocurrency} = coins;
    if ([currency, cryptocurrency].includes('')) {
      Alert.alert('Fields empty', 'The two fields are required');
    } else {
      setData({...data, searchAPI: true});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Currency</Text>
      <Picker
        style={styles.input}
        selectedValue={coins.currency}
        onValueChange={currency => {
          setCoins({...coins, currency});
        }}>
        <Picker.Item label="-- Choose --" value="" />
        <Picker.Item label="US Dollar" value="USD" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Colombian Peso" value="COP" />
        <Picker.Item label="Pound Sterling" value="GBP" />
      </Picker>
      <Text style={styles.label}>Cryptocurrency</Text>
      <Picker
        style={styles.input}
        selectedValue={coins.cryptocurrency}
        onValueChange={cryptocurrency => {
          setCoins({...coins, cryptocurrency});
        }}>
        <Picker.Item label="-- Choose --" value="" />
        {crypto.map(coin => (
          <Picker.Item
            key={coin.CoinInfo.Id}
            label={coin.CoinInfo.FullName}
            value={coin.CoinInfo.Name}
          />
        ))}
      </Picker>
      <TouchableHighlight
        style={styles.btnQuote}
        onPress={() => {
          handleForm();
        }}>
        <Text style={styles.btnQuoteText}>Quote</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
  label: {fontSize: 22, fontWeight: '700', marginBottom: 10},
  input: {backgroundColor: '#FFF', borderRadius: 10, marginBottom: 30},
  btnQuote: {
    backgroundColor: '#753BE0',
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

export default Form;
