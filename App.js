import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  Modal,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Header from './src/components/Header';
import Form from './src/components/Form';
import ModalInfo from './src/components/ModalInfo';
import axios from 'axios';

const App = () => {
  const [crypto, setCrypto] = useState([]);
  const [data, setData] = useState({
    searchAPI: false,
    info: {},
    modalVisibility: false,
  });
  const [coins, setCoins] = useState({
    currency: '',
    cryptocurrency: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchAPI = async () => {
      try {
        const url =
          'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const request = await axios.get(url);
        setCrypto(request.data.Data);
      } catch (error) {
        console.log(error);
      }
    };
    searchAPI();
  }, []);

  useEffect(() => {
    const obtainDataAPI = async () => {
      if (data.searchAPI) {
        try {
          setLoading(true);
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins.cryptocurrency}&tsyms=${coins.currency}`;
          const request = await axios.get(url);
          setTimeout(() => {
            setData({
              ...data,
              info: request.data.DISPLAY[coins.cryptocurrency][coins.currency],
              modalVisibility: true,
            });
            setLoading(false);
          }, 2000);
        } catch (error) {
          console.log(error);
        }
      }
    };
    obtainDataAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.searchAPI]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        {loading && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#753BE0" />
          </View>
        )}
        <Image style={styles.image} source={require('./src/img/crypto.png')} />
        <Form
          data={data}
          coins={coins}
          crypto={crypto}
          setData={setData}
          setCoins={setCoins}
        />
        <Modal animationType="slide" visible={data.modalVisibility}>
          <ModalInfo
            data={data}
            coins={coins}
            setData={setData}
            setCoins={setCoins}
          />
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 30,
  },
});

export default App;
