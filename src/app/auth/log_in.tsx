import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router'

import Button from '../../components/Button';

const handlePress = (): void => {
    // ログイン
    console.log('pressed');
    router.replace('/memo/list');
}

const LogIn = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>LogIn</Text>
                <TextInput style={styles.input} value='Email address' />
                <TextInput style={styles.input} value='Password' />
                <Button label='Submit' onPress={handlePress}/>
                <View style={styles.footer} >
                    <Text style={styles.footerText}>Not Registerd?</Text>
                    <Link href='/auth/sign_up' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign Up here!</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,

    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        backgroundColor: '#fff',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3',
    },
});

export default LogIn;