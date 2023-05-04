import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
    elevation: 5,
  },
})
