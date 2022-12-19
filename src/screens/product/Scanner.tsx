import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useCameraDevices} from 'react-native-vision-camera';
import BarcodeScanner from 'ts-react-native-barcode-scanner';

const ScannerScreen = () => {
  const devices = useCameraDevices();
  const device = devices.front;
  return (
    <View style={{flex: 1}}>
      <Text>ScannerScreen</Text>
      {device && (
        <BarcodeScanner
          style={StyleSheet.absoluteFill}
          camera={device}
          callback={(barcodes) => {
            console.log(barcodes);
          }}
        />
      )}
    </View>
  );
};

export default ScannerScreen;
