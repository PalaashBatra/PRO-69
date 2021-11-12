import React, { Component } from 'react';
import FB from './screens/fb'
import IN from './screens/in'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}
const TabNavigator= createBottomTabNavigator({
  IN: {screen: IN},
  FB: {screen: FB}
})

const AppContainer= createAppContainer(TabNavigator)