import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import logo from '../../../assets/png/logo.png';
import setting from '../../../assets/png/setting.png';
import mastercard from '../../../assets/png/mastercard.png';
import wallet from '../../../assets/png/wallet.png';
import pix from '../../../assets/png/pix.png';
import boleto from '../../../assets/png/boleto.png';
import dinheiro from '../../../assets/png/dinheiro.png';

export function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Image source={logo}/>
                <Image source={setting}/>
            </View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View/>
                    <Image source={mastercard}/>
                </View>
                <Text style={styles.cardText}>Ana Silva</Text>
            </View>
            <View style={styles.cardDetails}>
                <View style={styles.cardDetailsHeader}>
                    <Text style={styles.cardDetailsHeaderText}>Saldo disponível</Text>
                    <Image source={wallet}/>
                </View>
                <Text style={styles.cardDetailsText}>R$145,76</Text>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>Do que precisa?</Text>
            <ScrollView style={styles.footerContentScrollView} showsHorizontalScrollIndicator={false} horizontal={true}>
                <View style={styles.footerCard}>
                    <Image source={pix}/>
                    <Text style={styles.footerCardText}>Fazer um Pix</Text>
                </View>
                <View style={styles.footerCard}>
                    <Image source={boleto}/>
                    <Text style={styles.footerCardText}>Pagar um boleto</Text>
                </View>
                <View style={styles.footerCard}>
                    <Image source={dinheiro}/>
                    <Text style={styles.footerCardText}>Pagar um depósito</Text>
                </View>
            </ScrollView>
           
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#820AD1',
    paddingTop: 40,
  },
  content:{
    paddingHorizontal: 30,
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  card:{
    width: '100%',
    height: 190,
    backgroundColor: '#9500F6',
    borderRadius: 20,
    elevation: 5,
    marginBottom: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardDetails:{
    width: '100%',
    height: 120,
    backgroundColor: '#9500F6',
    borderRadius: 20,
    elevation: 5,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText:{
    color: '#FFF',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '600',
  },
  cardDetailsHeader:{
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cardDetailsText:{
    color: '#FFF',
    fontSize: 34,
    fontWeight: '600',
  },
  cardDetailsHeaderText:{
    color: '#FFF',
  },
  footer:{
    paddingTop: 30,
    paddingLeft: 20,
  },
  footerText:{
    color: '#FFF',
    marginHorizontal: 20,
    paddingBottom: 30,
    fontWeight: '600',
    fontSize: 14,
  },
  footerCard:{
    width: 100,
    height: 127,
    backgroundColor: '#9500F6',
    elevation: 5,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  footerCardText:{
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
  },
  footerContentScrollView:{
    height: 400,
  }
});
