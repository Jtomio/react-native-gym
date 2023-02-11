import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Exercise } from "../screen/Exercise";
import { History } from "../screen/History";
import { Profile } from "../screen/Profile";
import { Home } from "../screen/Home";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="history"
        component={History}
      />
      <Screen
        name="profile"
        component={Profile}
      />
      <Screen
        name="exercise"
        component={Exercise}
      />
    </Navigator>

  )
}