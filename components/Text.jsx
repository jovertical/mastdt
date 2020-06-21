import * as React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import THEME from '@constants/theme';

export default function XText({
  color = THEME.colors['gray-900'],
  weight = 'regular',
  size = 'base',
  children,
  ...rest
}) {
  return (
    <Text
      style={{
        fontFamily: `inter-${weight}`,
        fontSize: size === 'xl' ? 32 : 16,
        color: THEME.colors[color],
      }}
      {...rest}
    >
      {children}
    </Text>
  );
}

XText.propTypes = {
  weight: PropTypes.oneOf(['light', 'regular', 'semibold']),
  size: PropTypes.oneOf(['base', 'xl']),
};
