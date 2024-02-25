import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../../styles/styles";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray600,
        alignItems: "center",
    },
    logoBox: {
        width: "100%",
        height: 173,
        backgroundColor: COLORS.gray700,
        alignItems: "center",
        justifyContent: "center",
    },
    inputBox: {
        flexDirection: 'row',
        height: 54,
        marginTop: -27,
        alignItems: 'center',
    },
    iconContainer: {
        width: 52 * (Dimensions.get('window').width/375),
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.gray300,
        backgroundColor: COLORS.blueDark,
        borderRadius: 6,
    },
    inputText: {
        width:  271 * (Dimensions.get('window').width/375),
        height: 54,
        color: "white",
        fontSize: SIZES.medium,
        borderRadius: 6,
        fontFamily: 'regular',
        backgroundColor: COLORS.gray500,
        marginRight: 4,
        paddingLeft: 16
    },
    listEmpty: {
        flex: 1,
        width:  327 * (Dimensions.get('window').width/375),
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: COLORS.gray400,
        paddingVertical: 48,
        marginTop: 20
    },
    listEmptyText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.gray300,
        marginTop: 16
    },
    listEmptyText2: {
        fontSize: 14,
        color: COLORS.gray300
    }

});