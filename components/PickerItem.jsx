import * as React from 'react';
import { PickerItemProps } from 'react-native';
import { Picker } from '@react-native-community/picker';

/**
 * @param {PickerItemProps} props
 */
export default function PickerItem(props) {
  return <Picker.Item {...props} />;
}
