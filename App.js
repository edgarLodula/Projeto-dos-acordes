import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateCount from "./screens/CreateCountScreen";
import Inicial from "./screens/InicialScreen";
import Login from "./screens/loginScreen";
const Stack=createStackNavigator()
const StackNav=()=>{
return(<Stack.Navigator initialRouteName="LoginScreen">  
<Stack.Screen name="LoginScreen" component={Login}> </Stack.Screen>
<Stack.Screen name="CreateCount" component={CreateCount}> </Stack.Screen>
<Stack.Screen name="Inicial" component={Inicial}> </Stack.Screen>
 </Stack.Navigator>)

}
export default function App() {
  return (
    <NavigationContainer>
      
    </NavigationContainer>
  );
}


