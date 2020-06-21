import * as React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Text from '@components/Text';
import THEME from '@constants/theme';

export default function Button({
  title,
  color = THEME.colors['blue-500'],
  style,
  ...props
}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 3,
        backgroundColor: THEME.colors['blue-500'],
        ...style,
      }}
      {...props}
    >
      <Text color="white">{title}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};
