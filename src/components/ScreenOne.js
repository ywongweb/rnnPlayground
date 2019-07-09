import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { Navigation } from "react-native-navigation"

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

  // componentDidMount(): void {
  //   Navigation.mergeOptions(this.props.componentId, {
  //     topBar: {
  //       background: {
  //         color: 'green',
  //         component: {
  //           name: 'HeaderTwo'
  //         }
  //       }
  //     }
  //   });
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
