import {StyleSheet, Platform} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headingText: {
    fontSize: 20,
    fontWeight: '700',
    marginStart: 10,
    color: COLORS.BLACK,
  },
  flatListStyle: {
    marginTop: 10,
    marginBottom: Platform?.OS == 'android' ? 120 : 80,
  },
  renderItemContainer: {
    marginHorizontal: 10,
    elevation: 0,
    backgroundColor: COLORS.WHITE,
    borderRadius: 6,
    paddingVertical: 6,
    zIndex: 1001,
    marginTop: 14,
    justifyContent: 'center',
    shadow: {
      shadowColor: COLORS.SHADOW_COLOR,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.35,
      shadowRadius: 4,
      elevation: 5,
    },
  },
  retryButton: {
    zIndex: 1001,
    backgroundColor: COLORS.WHITE,
    width: 100,
    height: 30,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  questionText: {
    paddingHorizontal: 6,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.BLACK,
  },
  linkText: {marginTop: 4, paddingHorizontal: 6},
  questionLink: {color: COLORS.BLUE, paddingHorizontal: 8, marginTop: 4},
  responseText: {
    marginTop: 4,
    paddingHorizontal: 6,
  },
  activityIndicator: {marginVertical: 10, alignItems: 'center'},
  noInternetConnectionView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noIntenetText: {fontSize: 20, fontWeight: '700'},
  retryText: {fontSize: 16, fontWeight: '600'},
});

export default styles;
