import * as React from 'react';
import TabNavigation from './navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component{
  render (){
    return (
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
    )
  }
}