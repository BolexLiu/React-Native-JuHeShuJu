import {StyleSheet} from 'react-redux';
import {APP_MAIN_COLOR} from '../Constants';

const splash = ({
    container: {
        flex: 1,
        backgroundColor: APP_MAIN_COLOR,
        justifyContent: 'flex-start',
        paddingTop: 50,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 15,
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text2: {
        color: '#D3D3D3',
        fontSize: 30,
        marginBottom: 10,
    },
    text3: {
        color: '#D3D3D3',
        fontSize: 30,
        marginTop: 30,
    },
    tabBarStyle: {
        borderTopWidth : .5,
        borderColor    : '#b7b7b7',
        backgroundColor: 'white',
        opacity        : 1,
        height:80,
    }
});

export default splash;