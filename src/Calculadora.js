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

    const CalcularResultado = () =>{
        try {
            const evaluarResultado = math.evaluate(resultado);
            setResultado(evaluarResultado.toString());
        } catch (error) {
            setResultado("Error")
        }
    };

}

export default Calculadora;