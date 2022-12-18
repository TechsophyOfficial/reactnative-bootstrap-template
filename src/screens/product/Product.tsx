import {initStripe} from '@stripe/stripe-react-native';
import React, {useEffect, useState} from 'react';
import {
  usePaypalPayment,
  useRazorpayPayment,
  useStripePayment,
} from 'react-native-payments-3p';
import PrimaryButton from '../../components/PrimaryButton';
import ScreenHeader from '../../components/ScreenHeader';
import Spinner from '../../components/Spinner';
import TextInput from '../../components/TextInput';
import View from '../../components/View';
import useOnlyKeycloak from '../../hooks/useOnlyKeycloak';
import useTheme from '../../hooks/useTheme';
import {ProductComposite} from '../../navigation/ProductStack';
import {
  createPaypal,
  createRazorpay,
  createStripe,
} from '../../util/api/payment';
import {RAZORPAY_KEYS, STRIPE_KEYS} from '../../util/constants';

type Props = ProductComposite<'ProductPage'>;

const Product = ({navigation}: Props) => {
  const theme = useTheme();

  const [amount, setAmount] = useState('100');
  const [currency, setCurrency] = useState('USD');

  const {processPayment: processRazorpay} = useRazorpayPayment(
    RAZORPAY_KEYS.key_id
  );
  const {processPayment: processStripe} = useStripePayment();
  const {processPayment: processPaypal} = usePaypalPayment(true);

  const {profile} = useOnlyKeycloak();

  useEffect(() => {
    initStripe({publishableKey: STRIPE_KEYS.publishable_key});
  }, []);

  return (
    <View>
      <ScreenHeader text={'Product Page'} navigation={navigation} />
      <View style={{paddingHorizontal: theme.paddingHorizontal}}>
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
            processRazorpay(parseFloat(amount), {
              description: 'Description',
              order_id: razorpayResponse.data.order_id,
              prefil: {
                email: profile?.email,
                contact: '',
                name: profile?.full_name,
              },
            });
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
              const response = await processPaypal(
                paypalResponse.data.order_id
              );
              console.log(response);
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
            const result = await processStripe({
              merchantDisplayName: 'Techsophy',
              customerId: stripeResponse.data.customer,
              paymentIntentClientSecret: stripeResponse.data.paymentIntent,
              customerEphemeralKeySecret: stripeResponse.data.ephemeralKey,
            });
            console.log(result);
          }}
        />
      </View>
    </View>
  );
};

export default Product;
