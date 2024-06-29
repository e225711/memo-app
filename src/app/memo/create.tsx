import {
    View, TextInput, StyleSheet, KeyboardAvoidingView
   } from 'react-native';
   import { Feather } from '@expo/vector-icons';
   import { router } from 'expo-router';
   
   import CircleButton from '../../components/CircleButton';

    const handlePress = (): void => {
         console.log('pressed');
         router.push('/memo/list');
    }
   
   const Create = (): JSX.Element => {
       return (
           <KeyboardAvoidingView behavior='height' style={styles.container}>
               <View style={styles.inputContainer}>
                   <TextInput multiline style={styles.input} value={''}></TextInput>
               </View>
               <CircleButton onPress={handlePress}>
                   <Feather name='check' size={40}/>
               </CircleButton>
           </KeyboardAvoidingView>
       );
   }
   
   const styles = StyleSheet.create({
       container: {
           flex: 1,
           backgroundColor: '#fff',
       },
       inputContainer: {
           paddingHorizontal: 27,
           paddingVertical: 32,
           flex: 1,
       },
       input: {
           flex: 1,
           fontSize: 16,
           textAlignVertical: 'top',
           lineHeight: 24,
       },
   });
   
   export default Create;