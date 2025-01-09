import { Text, View } from "react-native";
import { Meditation } from "../types";

export function MeditationList({meditation}: {meditation: Meditation}){
    return(
        <View className="p-5 border border-gray-500 rounded-lg">
            <Text className="font-semibold text-2xl">{meditation.title}</Text>
        </View>
    )
}