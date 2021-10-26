import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    height: 48,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: getBottomSpace() + 20,
  }
});