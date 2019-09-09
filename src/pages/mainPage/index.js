import React from 'react';
import { Platform , View, Text} from 'react-native';
import { SearchAppBar } from '../../components/searchAppBar';

const MainPage = props => {
  return (
    <View>
      { Platform.OS === 'web' &&
        <SearchAppBar/>
      }
      {!!process.env.NODE_ENV && <Text>This is the Main page running in env: {process.env.NODE_ENV}</Text>}
    </View>
  );
};
export default MainPage;