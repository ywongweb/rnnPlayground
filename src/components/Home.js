import React, { PureComponent } from 'react'
import { Text, View, Button } from 'react-native'
import { Navigation } from "react-native-navigation"

class Home extends PureComponent {
  static options() {
    return {
      topBar: {
        background: {
          component: {
            name: 'Header'
          }
        }
      }
    }
  }

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
              name: 'ScreenOne',
              options: {
                topBar: {
                  background: {
                    color: 'yellow',
                    component: {
                      name: 'HeaderTwo'
                    }
                  }
                }
              }
            },
          })
        }} title="gogogoggogo">Go go go</Button>
      </View>
    )
  }
}

export default Home
