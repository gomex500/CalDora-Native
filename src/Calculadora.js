// importaciones generares
import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {create, all} from "mathjs";

// inicializando math
const math = create(all);

const Calculadora = () =>{
    // estado de resultado
    const [resultado, setResultado] = useState('0');
    const [opertation, setOperation] = useState('');

    // funcion de los botones para que este tenga el valor y asignacion
    const BtnPress = async (value) =>{
        if (opertation === '') {
            setOperation(value);
            await CalcularResultado();
        } else {
            setOperation(opertation + value);
            await CalcularResultado();
        }
    };

    const btnBorar = () =>{
        setOperation(opertation.substring(0,opertation.length - 1));
        CalcularResultado();
    }


    const CalcularResultado = () =>{
        try {
            const evaluarResultado = math.evaluate(opertation);
            setResultado(evaluarResultado.toString());
        } catch (error) {
            setResultado("Error")
        }
    };

    const Resultado = () =>{
        if (opertation == '') {
            setResultado('0')
        } else {
            try {
                setResultado(eval(opertation))
            } catch (error) {
                setResultado("Error")
            }
        }
    }

    // funcion para limpiar campo
    const limpiarCampos = () =>{
        setResultado('0');
        setOperation('');
    };

    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.operacion}>{opertation}</Text>
                <Text style={styles.resultado}>{resultado}</Text>
            </View>
            <View style={styles.box2}>
                <View style={styles.box3}>
                    <TouchableOpacity
                        style={styles.btn3}
                        onPress={limpiarCampos}
                    >
                        <Text style={styles.textBtn}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn3}
                        onPress={btnBorar}
                        >
                        <Text style={styles.textBtn}>⌫</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn2} 
                        onPress={() => BtnPress('/')}
                    >
                        <Text style={styles.textBtn}>/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn2}
                        onPress={() => BtnPress('*')}
                    >
                        <Text style={styles.textBtn}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box3}>
                    <TouchableOpacity 
                        style={styles.btn1}
                        onPress={() => BtnPress('7')}
                    >
                        <Text style={styles.textBtn}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn1}
                        onPress={() => BtnPress('8')}
                    >
                        <Text style={styles.textBtn}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn1}
                        onPress={() => BtnPress('9')}
                    >
                        <Text style={styles.textBtn}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn2}
                        onPress={() => BtnPress('-')}
                    >
                        <Text style={styles.textBtn}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box3}>
                    <TouchableOpacity 
                        style={styles.btn1}
                        onPress={() => BtnPress('4')}
                    >
                        <Text style={styles.textBtn}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn1}
                        onPress={() => BtnPress('5')}
                    >
                        <Text style={styles.textBtn}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn1}
                        onPress={() => BtnPress('6')}
                    >
                        <Text style={styles.textBtn}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn2}
                        onPress={() => BtnPress('+')}
                    >
                        <Text style={styles.textBtn}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box3}>
                    <TouchableOpacity 
                        style={styles.btn1}
                        onPress={() => BtnPress('1')}
                    >
                        <Text style={styles.textBtn}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn1}
                        onPress={() => BtnPress('2')}
                    >
                        <Text style={styles.textBtn}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn1}
                        onPress={() => BtnPress('3')}
                    >
                        <Text style={styles.textBtn}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn2}
                        onPress={() => BtnPress('.')}
                    >
                        <Text style={styles.textBtn}>.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box3}>
                    <TouchableOpacity 
                        style={styles.btn1}
                        onPress={() => BtnPress('0')}
                    >
                        <Text style={styles.textBtn}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn2}
                        onPress={CalcularResultado}
                    >
                        <Text style={styles.textBtn}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#252525',
        height: '100%',
      },
      box:{
        width: '98%',
        height: '38%',
        backgroundColor:'#4D4D4D',
      },
      box2: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15,
      },
      box3:{
          marginTop: 20,
          flex: 2,
          flexDirection: 'row',
      },
      operacion: {
        textAlign:'right',
        marginTop: '40%',
        marginRight: '5%',
        fontSize: 40,
        color: '#b6ffff'
      },
      resultado: {
        textAlign:'right',
        marginRight: '5%',
        fontSize: 70,
        color:'#40cfff'
      },
      btn1: {
        width: '22%',
        backgroundColor: '#020202',
        margin: 5,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 12,
        borderRadius: 5,
      },
      btn2: {
        width: '22%',
        backgroundColor: '#40cfff',
        margin: 5,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 12,
        borderRadius: 5,
      },
      btn3: {
        width: '22%',
        backgroundColor: '#666666',
        margin: 5,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 12,
        borderRadius: 5,
      },
      textBtn: {
          fontSize: 25,
          fontWeight: 'bold',
          color: '#f2f2f2'
      }
});

export default Calculadora;