import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export const styles = StyleSheet.create({
  checkContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    minWidth: 150
  },
  container:{
    width: '100%', maxWidth: 350
  },
  label: {
    paddingVertical: 10,
    color: colors.lightgray
  },
  primaryButton: {
    backgroundColor: colors.primary
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.white
  },
  terms: {
    color: colors.white,
    fontSize: 12,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 20,
    color: colors.white,
    textAlign: "center",
    fontSize: 20, 
  },
  whiteCard: {
    backgroundColor: colors.white,
    width: '100%',
    padding: 20,
    borderRadius: 10
  },
});