import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../Pages/Dashboard/Dashboard';

export function AppStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Dashboard' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    )

}