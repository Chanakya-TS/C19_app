import React, {useState} from 'react'
import { Text } from 'react-native'

export default function DisplayWarning({ isInRZ }){
    const [warning, setWarning] = useState(false);
    if ( isInRZ ) {
        setWarning(true)
    }
    return warning ? (
        <Text>WARNING</Text>
    ) : (
        <Text>SAFE</Text>
    )
}