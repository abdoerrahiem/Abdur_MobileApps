import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export const navigate = (name: never, params: never) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export const currentRoute = () => {
  return navigationRef.getCurrentRoute()
}

export const replace = (name: never, params: never) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      StackActions.replace(name, {
        params,
      }),
    )
  }
}
