import React, { PureComponent } from 'react'
import { Text, View, Button } from 'react-native'
import { Navigation } from "react-native-navigation"

class Home extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'teal'}}>
      <Text>new_scene Home</Text>
        <Text>new_scene Home</Text>
        <Text>new_scene Home</Text>
        <Text>new_scene Home</Text>
        <Text>new_scene Home</Text>
        <Button onPress={() => {
          Navigation.push(this.props.componentId, {
            component: {
              name: 'ScreenOne'
            }
          })
        }} title="gogogoggogo">Go go go</Button>
      </View>
    )
  }
}

export default Home
