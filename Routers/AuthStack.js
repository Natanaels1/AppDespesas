import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';

export function AuthStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )

}