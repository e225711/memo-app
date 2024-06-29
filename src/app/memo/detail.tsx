import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

import CircleButton from '../../components/CircleButton';

const handlePress = (): void => {
    console.log('pressed');
    router.push('/memo/edit');
}

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoHeaderTitle}>買い物リスト</Text>
                <Text style={styles.memoHeaderDate}>2021/01/01</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    あああああああああああああああああああああ
                    あああああああああああああああああああああ
                    あああああああああああああああああああああ
                    あああああああああああああああああああああ
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style={{ top: 60, bottom: 'auto'}}>
                <Feather name='plus' size={40}/>
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoHeaderTitle: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    memoHeaderDate: {
        color: '#fff',
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000',
    },
})

export default Detail;