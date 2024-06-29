import { View, Text, StyleSheet } from 'react-native';

interface Props {
    children: string;
}

const CircleButton = (props: Props): JSX.Element => {
    const { children } = props;
    return (
        <View style={styles.circleButton}>
            <Text style={styles.circleLabel}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButton: {
        backgroundColor: '#467FD3',
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    circleLabel: {
        color: '#fff',
        fontSize: 40,
        lineHeight: 40,
    },
})

export default CircleButton;