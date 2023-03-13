import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, UserProfile } from "../screens";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Product List",
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontWeight: "bold"
          }
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerTitle: "Detail profile",
          title: "Profile",
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontWeight: "bold"
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
