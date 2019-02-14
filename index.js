import { NativeModules, Platform, Linking } from 'react-native';

const open = () => {
  if (Platform.OS === 'ios') {
    return Linking.openURL('app-settings:');
  } else {
    return NativeModules.OpenNotification.open();
  }
};

export default { open };
