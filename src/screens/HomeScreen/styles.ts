import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'

export const styles = StyleSheet.create({
  homeHeader: {
    padding: 10,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeHeaderTextInput: {
    fontSize: 12,
    fontFamily: fonts.regular,
    padding: 0,
    flex: 1,
  },
  homeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e8eaed',
    flex: 1,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
  },
  productCard: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 5,
    borderRadius: 5,
    paddingBottom: 10,
  },
  homeFooter: {
    borderTopWidth: 1,
    borderTopColor: colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  homeFooterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chip: {
    backgroundColor: colors.red,
    width: 15,
    height: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -5,
    top: 0,
  },
  homeProductSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  homeProductSelectedButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeModal: {
    backgroundColor: colors.white,
    padding: 20,
  },
  homeModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeModalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeModalClose: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'transparent',
    zIndex: 2,
  },
  buttonAdd: {
    width: 50,
    position: 'absolute',
    bottom: 70,
    right: 20,
    zIndex: 1,
    backgroundColor: colors.red,
  },
  productCardButtons: {
    position: 'absolute',
    flexDirection: 'row',
  },
})
