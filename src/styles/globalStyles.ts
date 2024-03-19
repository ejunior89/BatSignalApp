import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  // Defina estilos globais aqui
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    flexDirection:'column',
    borderColor: '#ffffff',
    borderWidth:2,
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:60,
  },
  inputer:{
    width:'100%',
    backgroundColor:'#E5BF3C',
    color:'black',
    fontSize:20,
    height:40,
    borderWidth:1,
    borderRadius:5,
    padding:10,
  },
  button:{
    marginTop:5,
    alignItems:'center',
    width:'100%',
    justifyContent:'center',
    paddingVertical: 12,
    paddingHorizontal:32,
    borderRadius:4,
    elevation:3,
    backgroundColor: 'black'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  }
});

export default globalStyles;
