import { Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootTabsLayout() {
  return (
    <Tabs
      screenOptions = {{
        headerShown: false,
        tabBarActiveTintColor: '#741b47',
        tabBarInactiveTintColor: '#c1c1c1',
        tabBarStyle: {
          height: 50,
        },
        tabBarShowLabel: false,
        }}
    >
      <Tabs.Screen name="index" 
      options={{
        tabBarIcon: (({ color }) => (<MaterialIcons name="home" size={24} color = {color}/>))
      }}/>

      <Tabs.Screen name="favoritos" 
      options={{
        tabBarIcon: (({ color }) => (<MaterialIcons name="favorite" size={24} color= {color} />))
      }}/>

      <Tabs.Screen name="compras" 
      options={{
        tabBarIcon: (({ color }) => (<Ionicons name="bag" size={24} color={color} />))
      }}/>

      <Tabs.Screen name="sobre" 
      options={{
        tabBarIcon: (({ color }) => (<FontAwesome name="bell" size={24} color= {color} />))
      }}/>

    </Tabs>
  );
}
