import { Navigation } from 'react-native-navigation'
import Home from '../components/Home'
import ScreenOne from '../components/ScreenOne'
import Header from '../components/Header'
import HeaderTwo from '../components/HeaderTwo'

export function registerScreens() {
  // must pass redux in Home even though it doesn't uses it itself.
  // otherwise nested containers will not get redux
  Navigation.registerComponent('Home', () => Home)
  Navigation.registerComponent('ScreenOne', () => ScreenOne)
  Navigation.registerComponent('Header', () => Header)
  Navigation.registerComponent('HeaderTwo', () => HeaderTwo)
}
