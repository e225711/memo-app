import { View, Text, StyleSheet } from 'react-native';

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text>Memo App</Text>
                    <Text>ログアウト</Text>
                </View>
            </View>
            <View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2021/01/01</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2021/01/01</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2021/01/01</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //画面いっぱいに広げる
        justifyContent: 'center', //縦方向の中央寄せ
        alignItems: 'center' //横方向の中央寄せ
    }
})

export default Index;
 
