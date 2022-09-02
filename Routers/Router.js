import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { Context } from '../context/context';

export default props => {

    const { authenticated } = useContext(Context);
    //const authenticated = false;

    return (
        <NavigationContainer>
            {authenticated ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );

};