import { StyleSheet , Dimensions} from "react-native"
import {colours} from '../../assets/standardized'

let width = Dimensions.get('window').width
export default StyleSheet.create({
    container: {
        flex: 10 / 100,
        flexDirection: 'row',
        padding: 30,
        alignSelf: 'stretch',
        backgroundColor: colours.header,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: colours.icon,
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5
    },
    cameraPos:{
        position: 'absolute',
        top: -50,
        left: (width/2)-130/2,
    },
    camera: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: colours.blue,
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        shadowColor: colours.icon,
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5
    },
   
    icon: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text:{
        fontFamily: 'Nunito-Regular',
        fontSize: 15
    }
    
})