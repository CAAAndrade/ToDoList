import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../../styles/styles";


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 19,
        width:  327 * (Dimensions.get('window').width/375),
        marginTop: 32,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    box: {
        flexDirection: 'row',
        gap: 8
    },
    text1: {
        color: COLORS.blue,
        fontSize: SIZES.regular,
        fontFamily: 'bold'
    },
    text2: {
        color: COLORS.gray200,
        fontSize: SIZES.regular,
        fontFamily: 'bold',
        backgroundColor: COLORS.gray400,
        width: 25,
        height: 19,
        textAlign: 'center',
        borderRadius: 8
    },
    text3: {
        color: COLORS.purple,
        fontSize: SIZES.regular,
        fontFamily: 'bold'
    }
})