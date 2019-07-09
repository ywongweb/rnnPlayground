import { Navigation } from 'react-native-navigation'
import { registerScreens } from './router'

// screen related book keeping
registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "Home"
          }
        }]
      }
    },
  })
})
