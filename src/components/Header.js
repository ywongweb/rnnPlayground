import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

class Header extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Text>new_scene Header</Text>
      </View>
    )
  }
}

export default Header
