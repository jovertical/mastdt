import * as React from 'react'
import PropTypes from 'prop-types'
import { Text, TextProps } from 'react-native'
import { colors } from '~/constants/theme'

/**
 * @param {TextProps} props
 */
export default function XText({
  color = colors['gray-900'],
  weight = 'regular',
  size = 'base',
  style,
  children,
  ...props
}) {
  return (
    <Text
      style={{
        ...{
          fontFamily: `inter-${weight}`,
          fontSize: size === 'xl' ? 32 : size === 'lg' ? 24 : 16,
          color: colors[color],
        },
        ...style,
      }}
      {...props}
    >
      {children}
    </Text>
  )
}

XText.propTypes = {
  color: PropTypes.string,
  weight: PropTypes.oneOf(['light', 'regular', 'semibold']),
  size: PropTypes.oneOf(['base', 'lg', 'xl']),
}
