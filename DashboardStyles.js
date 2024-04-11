
//Dashboard Styles
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        flex: 1,
      },
      menuButton: {
        position: 'absolute',
        top: '5%',
        left: '5%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 30,
        zIndex: 1,
      },
      dropdown: {
        position: 'absolute',
        top: 80,
        left: 0,
        backgroundColor: '#fff',
        padding: 3,
        borderRadius: 5,
        zIndex: 10,
        minWidth: 400,
      },
      dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      dropdownItemText: {
        fontSize: 16,
        marginVertical: 5,
        paddingHorizontal: 0,
      },
      dropdownDivider: {
        height: 0,
        backgroundColor: '#e0e0e0',
        marginVertical: 0,
      },
      locationButton: {
        position: 'absolute',
        top: '5%',
        right: '5%',
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      logo: {
        position: 'absolute',
        top: '-5%',
        alignSelf: 'center',
        width: 175,
        height: 175,
        resizeMode: 'contain',
        zIndex: 1,
      },
      callButton: {
        position: 'absolute',
        top: '17%',
        left: '5%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 30,
        zIndex: 1,
      },
      scrollView: {
        maxHeight: 500,
      },
      orderNumber: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      etaContainer: {
        position: 'absolute',
        bottom: 70,
        left: '5%',
        right: '5%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      etaText: {
        fontSize: 17,
        fontWeight: 'bold',
      },
      clearRouteButton: {
        position: 'absolute',
        bottom: 17,
        alignSelf: 'center',
        backgroundColor: '#e74c3c',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        zIndex: 10,
      },
      clearRouteButtonText: {
        color: '#ffffff',
        fontSize: 16,
      },
      exitButton: {
        position: 'absolute',
        top: '29%',
        left: '5%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 30,
        zIndex: 1,
      },
      dropdownTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        color: '#000',
        textAlign: 'center',
      },
      titleUnderline: {
        height: 2,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        marginVertical: 1,
        width: '100%',
      },
});
