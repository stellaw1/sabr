import { StyleSheet, Image } from 'react-native';

export default Logo = () => {
    return <Image style={styles.img} source={require('../assets/icon.png')} />;
}

const styles = StyleSheet.create({
    img: {
        width: 240,
        height: 100
    }
});
