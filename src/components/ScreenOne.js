import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

class ScreenOne extends PureComponent {
  // static options() {
  //   return {
  //       topBar: {
  //         background: {
  //           component: {
  //             name: 'Header'
  //           }
  //         }
  //       }
  //   }
  // }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'grey'}}>
        <Text>new_scene ScreenOne</Text>
        <Text>new_scene ScreenOne</Text>
        <Text>new_scene ScreenOne</Text>
        <Text>new_scene ScreenOne</Text>
        <Text>new_scene ScreenOne</Text>
      </View>
    )
  }
}

export default ScreenOne
