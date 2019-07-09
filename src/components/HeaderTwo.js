import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

class HeaderTwo extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'pink' }}>
        <Text>new_scene HeaderTwo</Text>
      </View>
    )
  }
}

export default HeaderTwo
