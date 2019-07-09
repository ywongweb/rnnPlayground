import { Navigation } from 'react-native-navigation'
import Home from '../components/Home'
import ScreenOne from '../components/ScreenOne'

export function registerScreens() {
  // must pass redux in Home even though it doesn't uses it itself.
  // otherwise nested containers will not get redux
  Navigation.registerComponent('Home', () => Home)
  Navigation.registerComponent('ScreenOne', () => ScreenOne)
}
