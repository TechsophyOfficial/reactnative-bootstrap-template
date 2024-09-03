import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import Text from '../../Components/Text';
import View from '../../Components/View';

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
