import { Link, router, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
import { meditations } from '@/data';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';


export default function MeditationDetails(){
  const {id} = useLocalSearchParams<{id:string}>();
  const{top}=useSafeAreaInsets();
  const meditation = meditations.find((m)=>m.id===Number(id));
  if(!meditation){
    return <Text className='text-center'>Mediattion not found!</Text>
  }
    return (
        <SafeAreaView>
          <Text className='text-3xl'>{meditation?.title}</Text>
          
          <AntDesign 
            onPress={()=>router.back()}
            className='absolute right-5'
            style={{top: top+5}} 
            name="close" 
            size={24} 
            color="black" />
        </SafeAreaView>
          
      );
}