import { Tabs } from "expo-router";

import FarmIcon from "../../assets/images/tabs/FarmIcon";
import HomeIcon from "../../assets/images/tabs/HomeIcon";
import SettingIcon from "../../assets/images/tabs/SettingIcon";
import TaskIcon from "../../assets/images/tabs/TaskIcon";
import WeatherIcon from "../../assets/images/tabs/WeatherIcon";

export default function HomeLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          margin: 15,
          paddingTop: 12,
          borderRadius: 25,
          height: 85,
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 5 },
        },
        tabBarLabelStyle: {
          fontFamily: "nunitosans-bold",
          fontSize: 14,
          paddingTop: 5,
        },
        tabBarActiveTintColor: "#000",
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          display: "flex",
        },
        tabBarIconStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon fill={focused ? "#12602F" : color} width={30} height={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyFarm"
        options={{
          title: "My Farm",
          tabBarIcon: ({ color, focused }) => (
            <FarmIcon fill={focused ? "#12602F" : color} width={25} height={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="Weather"
        options={{
          title: "Weather",
          tabBarIcon: ({ color, focused }) => (
            <WeatherIcon fill={focused ? "#12602F" : color} width={35} height={35} />
          ),
        }}
      />
      <Tabs.Screen
        name="FarmTask"
        options={{
          title: "Farm Task",
          tabBarIcon: ({ color, focused }) => (
            <TaskIcon fill={focused ? "#12602F" : color} width={30} height={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="Setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color, focused }) => (
            <SettingIcon fill={focused ? "#12602F" : color} width={30} height={30} />
          ),
        }}
      />
    </Tabs>
  );
}
