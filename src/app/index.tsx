import { Text, View, FlatList} from "react-native";
import { meditations } from "@/data";
import { Meditation } from "@/types";
import { MeditationList } from "@/components/MeditationList";



export default function HomeScreen(){
    return(
        <FlatList
            data={meditations}
            contentContainerClassName="gap-8 p-3"
            renderItem={({item})=> <MeditationList meditation={item}/>}
        />
    );
}