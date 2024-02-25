import { COLORS } from './../../styles/styles';
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { StyleSheet, Dimensions } from "react-native";



export const styles = StyleSheet.create({
    container: {
        width: 327 * (Dimensions.get('window').width/375),
        height: 64,
        backgroundColor: COLORS.gray500,
        borderRadius: 8,
        marginBottom: 8,

    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 12,

    },
    checkbox: {
        marginRight:8,
        marginTop: 20,
        fontSize: 24,
        borderRadius: 12,
    },
    
    text: {
        flex: 1,
        color: COLORS.gray100,
        fontSize: 14,
        marginTop: 12,
        textAlign: 'left',
        width: 235 * (Dimensions.get('window').width/375),
        lineHeight: 14 * 1.4,
        fontFamily: "regular"
    },
    textChecked: {
        flex: 1,
        color: COLORS.gray100,
        fontSize: 14,
        marginTop: 12,
        textAlign: 'left',
        width: 235 * (Dimensions.get('window').width/375),
        lineHeight: 14 * 1.4,
        fontFamily: "regular",
        textDecorationLine: 'line-through',
    },
    icon: {
        color: COLORS.gray300,
        marginTop: 16,
        marginRight: 12,
        marginLeft: 8
    }
})

