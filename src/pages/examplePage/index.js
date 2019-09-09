import React from 'react';
import { View, Text} from 'react-native';

const Example = props => {
  return (
    <View>
      {!!process.env.NODE_ENV && <Text>This is the Example page running in env: {process.env.NODE_ENV}</Text>}
    </View>
  );
};
export default Example;