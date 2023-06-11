// importaciones generares
import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {create, all} from "mathjs";

// inicializando math
const math = create(all);

const Calculadora = () =>{
    // estado de resultado
    const [resultado, setResultado] = useState('');

    // funcion de los botones para que este tenga el valor y asignacion
    const BtnPress = (value) =>{
        setResultado(resultado + value);
    };

    // funcion calcular q calcula el resultado de la calculadora
    const CalcularResultado = () =>{
        try {
            const evaluarResultado = math.evaluate(resultado);
            setResultado(evaluarResultado.toString());
        } catch (error) {
            setResultado("Error")
        }
    };

    // funcion para limpiar campo
    const limpiarCampos = () =>{
        setResultado("");
    };

    return(
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{resultado}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('7')}
                    >
                        <Text style={styles.buttonText}> 7 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('8')}
                    >
                        <Text style={styles.buttonText}> 8 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('9')}
                    >
                        <Text style={styles.buttonText}> 9 </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('4')}
                    >
                        <Text style={styles.buttonText}> 4 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('5')}
                    >
                        <Text style={styles.buttonText}> 5 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('6')}
                    >
                        <Text style={styles.buttonText}> 6 </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('1')}
                    >
                        <Text style={styles.buttonText}> 1 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('2')}
                    >
                        <Text style={styles.buttonText}> 2 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('3')}
                    >
                        <Text style={styles.buttonText}> 3 </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('0')}
                    >
                        <Text style={styles.buttonText}> 0 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('.')}
                    >
                        <Text style={styles.buttonText}> . </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={CalcularResultado}
                    >
                        <Text style={styles.buttonText}> = </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('+')}
                    >
                        <Text style={styles.buttonText}> + </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('-')}
                    >
                        <Text style={styles.buttonText}> - </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('*')}
                    >
                        <Text style={styles.buttonText}> * </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => BtnPress('/')}
                    >
                        <Text style={styles.buttonText}> / </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={limpiarCampos}
                    >
                        <Text style={styles.buttonText}> C </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Calculadora;