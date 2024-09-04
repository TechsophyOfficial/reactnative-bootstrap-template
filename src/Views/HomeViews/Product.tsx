import React, {useEffect, useState} from 'react';
// import {
//   usePaypalPayment,
//   useRazorpayPayment,
//   useStripePayment,
// } from 'ts-react-native-payments';
import PrimaryButton from '../../Components/PrimaryButton';
import ScreenHeader from '../../Components/ScreenHeader';
import Spinner from '../../Components/Spinner';
import TextInput from '../../Components/TextInput';
import View from '../../Components/View';
import useOnlyKeycloak from '../../hooks/useOnlyKeycloak';
import useTheme from '../../hooks/useTheme';
import {ProductComposite} from '../../navigation/ProductStack';
import {
  createPaypal,
  createRazorpay,
  createStripe,
} from '../../util/api/payment';
import HomeHeader from '../../Components/HomeHeader';
import {useTranslation} from 'react-i18next';
import i18n from '../../i18n/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Product = ({navigation}: any) => {
  const theme = useTheme();

  const [amount, setAmount] = useState('100');
  const [currency, setCurrency] = useState('USD');

  const {profile} = useOnlyKeycloak();

  const [language, setLanguage] = useState('');

  const {t} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('fr');
  }, []);

  useEffect(() => {
    setDefaultLanguage();
  }, []);

  const setDefaultLanguage = async () => {
    let lang = await AsyncStorage.getItem('global');
    console.log('onLanguageChange global', lang);
    setLanguage(lang);
    i18n.changeLanguage(lang ? lang : 'EN');
  };

  const onLanguageChange = (lang: any) => {
    console.log('onLanguageChange', lang);
    setLanguage(lang);
    AsyncStorage.setItem('global', lang);
    i18n.changeLanguage(lang);
  };

  // const onLanguageChange = (lang: any) => {
  //   setLanguage(lang);
  // };

  return (
    <View style={{flex: 1}}>
      {/* <ScreenHeader text={'Product Page'} navigation={navigation} /> */}
      <View style={{flex: 1}}>
        <HomeHeader
          onProfilePress={() => console.log('object')}
          handleBack={() => navigation?.goBack()}
          back={true}
          label={t('appthree')}
          value={language}
          language={false}
          onLanguageChange={(lang: any) => onLanguageChange(lang)}
        />
      </View>
      <View style={{flex: 10, paddingHorizontal: theme.paddingHorizontal}}>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          keyboardType="number-pad"
          style={{marginTop: theme.spacing}}
        />
        <Spinner
          data={['INR', 'USD']}
          onSelect={(text: string) => {
            setCurrency(text);
          }}
          style={{marginTop: theme.spacing}}
          label={currency}
        />
        <PrimaryButton
          style={{marginTop: theme.spacing}}
          text="Razorpay"
          onPress={async () => {
            const razorpayResponse = await createRazorpay(amount, currency);
            console.log(razorpayResponse.data);
            // processRazorpay(parseFloat(amount), {
            //   description: 'Description',
            //   order_id: razorpayResponse.data.order_id,
            //   prefil: {
            //     email: profile?.email,
            //     contact: '',
            //     name: profile?.full_name,
            //   },
            //   theme: '',
            //   image: '',
            //   currency: 'USD',
            //   name: '',
            // });
          }}
        />
        <PrimaryButton
          style={{marginTop: theme.spacing}}
          disabled={currency === 'INR'}
          text="PayPal"
          onPress={async () => {
            try {
              const paypalResponse = await createPaypal(
                parseFloat(amount),
                currency
              );
              // const response = await processPaypal(
              //   paypalResponse.data.order_id
              // );
            } catch (error) {
              console.error(error);
            }
          }}
        />
        <PrimaryButton
          style={{marginTop: theme.spacing}}
          text="Stripe"
          onPress={async () => {
            const stripeResponse = await createStripe(amount, currency);
            console.log(stripeResponse.data);
            // const result = await processStripe({
            //   merchantDisplayName: 'Techsophy',
            //   customerId: stripeResponse.data.customer,
            //   paymentIntentClientSecret: stripeResponse.data.paymentIntent,
            //   customerEphemeralKeySecret: stripeResponse.data.ephemeralKey,
            // });
          }}
        />
      </View>
    </View>
  );
};

export default Product;
