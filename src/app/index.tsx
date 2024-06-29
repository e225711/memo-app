import { View, Text, StyleSheet } from 'react-native';

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>Memo App</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
                </View>
            </View>

            <View>
                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2021/01/01</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2021/01/01</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2021/01/01</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
                
            </View>
            <View style={styles.circleButton}>
                <Text style={styles.circleLabel}>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //画面いっぱいに広げる
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#467FD3',
        height: 104,
        justifyContent: 'flex-end',
    },
    headerInner: {
        alignItems: 'center',
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 22,
        lineHeigt: 32,
        fontWeight: 'bold',
        color: '#fff',
    },
    memoListItem: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)',
        alignItems: 'center',
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484',
    },
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

export default Index;
 
