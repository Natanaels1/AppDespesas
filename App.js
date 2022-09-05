import { StyleSheet, SafeAreaView } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Router from './Routers/Router';
import { AuthProvider } from './context/context';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import Theme from './THEME/Theme';

export default function App() {

    const [fontsLoaded] = useFonts({
        Roboto_400Regular, 
        Roboto_500Medium, 
        Roboto_700Bold
    })

    if(!fontsLoaded) {
        return <AppLoading />
    };

    return (
        <ThemeProvider theme={Theme}>
            <AuthProvider>
                <SafeAreaView style={styles.container}>
                    <Router />
                </SafeAreaView>
            </AuthProvider>
        </ThemeProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
