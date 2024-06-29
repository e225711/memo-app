import { View, Text, StyleSheet } from 'react-native';

import Header from '../components/Header';
import MemoListItem from '../components/MemoListItem';
import CircleButtun from '../components/CircleButton';

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButtun>+</CircleButtun>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //画面いっぱいに広げる
        backgroundColor: '#fff',
    }
})

export default Index;
 
