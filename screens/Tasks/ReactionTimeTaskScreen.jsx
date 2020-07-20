import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import random from 'lodash/random';
import { colors } from '@constants/theme';
import Text from '@components/Text';
import useTimer from '@hooks/useTimer';

export default function ReactionTimeTaskScreen() {
  const timer = useTimer();
  const [entries, setEntries] = React.useState([]);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  function handlePress() {
    setEntries((prevEntries) => prevEntries.concat(timer.time));
    timer.reset();
  }

  React.useEffect(() => {
    setPosition({
      x: random(1, 3),
      y: random(1, 3),
    });
  }, [entries]);

  return (
    <View style={styles.root}>
      <Text>{timer.time}</Text>
      {/* <TouchableOpacity
        style={[
          styles.object,
          {
            left: `${25 * position.x}%`,
            top: `${25 * position.y}%`,
          },
        ]}
        onPress={handlePress}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    position: 'relative',
  },

  object: {
    width: 40,
    height: 40,
    marginLeft: -20,
    marginTop: -20,
    backgroundColor: colors['blue-500'],
    borderRadius: 100,
    position: 'absolute',
  },
});
