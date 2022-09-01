import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native'; 
import { styles } from './Styles';

export default props => {

    const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
    const [opacity] = useState(new Animated.Value(0));

    useEffect(()=> {

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 2,
                bounciness: 20,
                useNativeDriver: true
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            })
        ]).start()

    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />

            <View>
                <Text style={styles.title}>Seja o gestor da sua vida</Text>
            </View>

            <Animated.View style={{alignItems: 'center', 
                opacity: opacity,
                transform: [
                    { translateY: offset.y },
                ]
            }}>

                <Image source={require('../../Assets/image.png')} style={{width: 380, height: 400}} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}> Start </Text>
                </TouchableOpacity>

            </Animated.View>

            <View style={{height: '10%', widht: '90%'}}>
                <TouchableOpacity>
                    <Text style={styles.txtInsta}>by @natanael_s1</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    )

};