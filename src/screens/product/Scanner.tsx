import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
<<<<<<< HEAD
// import {useCameraDevices} from 'react-native-vision-camera';
=======
import {useCameraDevices} from 'react-native-vision-camera';
>>>>>>> fffae8aec6866113cb08b4c8196f3552291bb159
// import BarcodeScanner from 'ts-react-native-barcode-scanner';
import Text from '../../components/Text';
import View from '../../components/View';

const ScannerScreen = () => {
  // const devices = useCameraDevices();
  // const device = devices.front;
  return (
    <View style={{flex: 1}}>
      <Text>ScannerScreen</Text>
      {/* {device && (
        <BarcodeScanner
          style={StyleSheet.absoluteFill as ViewStyle}
          camera={device}
          callback={barcodes => {
            console.log(barcodes);
          }}
        />
      )} */}
    </View>
  );
};

export default ScannerScreen;
