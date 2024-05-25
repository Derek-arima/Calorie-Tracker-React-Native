import {View, Text, TextInput, StyleSheet, Button, ScrollView} from 'react-native';
import React, { useState } from 'react';

var increment = 0;

export default function Home() {
    const [userInputMon, setUserInputMon] = useState('');
    const [userInputTues, setUserInputTues] = useState('');
    const [userInputWed, setUserInputWed] = useState('');
    const [userInputThur, setUserInputThur] = useState('');
    const [userInputFri, setUserInputFri] = useState('');
    const [userInputSat, setUserInputSat] = useState('');
    const [userInputSun, setUserInputSun] = useState('');
    const [mon,setMon] = useState(0);
    const [tue,setTue] = useState(0);
    const [wed,setWed] = useState(0);
    const [thur,setThur] = useState(0);
    const [fri,setFri] = useState(0);
    const [sat,setSat] = useState(0);
    const [sun,setSun] = useState(0);
    const [total, setTotal] = useState(0);

    totalCount = (userInput, dayVal, day) => {
        let user = parseInt(userInput)
        increment += user
        dayVal += user
        setTotal(increment)
        setDay(dayVal, day)
        return increment
    };

    setDay = (dayVal, day) => {
        if (day == 'mon'){
            setMon(dayVal)
        };
        if (day == 'tue'){
            setTue(dayVal)
        };
        if (day == 'wed'){
            setWed(dayVal)
        };
        if (day == 'thur'){
            setThur(dayVal)
        };
        if (day == 'fri'){
            setFri(dayVal)
        };
        if (day == 'sat'){
            setSat(dayVal)
        };
        if (day == 'sun'){
            setSun(dayVal)
        };
    }



    return (
        <View style={styles.container}>
            <ScrollView keyboardDismissMode='on-drag'>
                <Text></Text>
                <Text>Calorie Tracker</Text>
                <Text></Text>
                <Text style={styles.title}>Monday</Text>
                <Text>How many calories did you intake this meal?</Text>
        
                <TextInput 
                keyboardType='numeric'
                style={styles.input}
                placeholder='Enter calorie count e.g 500'
                returnKeyType='submit'
                onChangeText={setUserInputMon}
                />
    
                <Button onPress={() => totalCount(userInputMon, mon,'mon')} title='Submit' />
                <Text>Calorie intake for the day:</Text>
                <Text>{mon}</Text>
                <Text>_________________________________________</Text>

                <Text></Text>
                <Text style={styles.title}>Tuesday</Text>
                <Text>How many calories did you intake this meal?</Text>
        
                <TextInput 
                keyboardType='numeric'
                style={styles.input}
                placeholder='Enter calorie count e.g 500'
                returnKeyType='submit'
                onChangeText={setUserInputTues}
                />
    
                <Button onPress={() => totalCount(userInputTues, tue,'tue')} title='Submit' />
                <Text>Calorie intake for the day:</Text>
                <Text>{tue}</Text>
                <Text>_________________________________________</Text>

                <Text></Text>
                <Text style={styles.title}>Wednesday</Text>
                <Text>How many calories did you intake this meal?</Text>
        
                <TextInput 
                keyboardType='numeric'
                style={styles.input}
                placeholder='Enter calorie count e.g 500'
                returnKeyType='submit'
                onChangeText={setUserInputWed}
                />
    
                <Button onPress={() => totalCount(userInputWed, wed,'wed')} title='Submit' />
                <Text>Calorie intake for the day:</Text>
                <Text>{wed}</Text>
                <Text>_________________________________________</Text>

                <Text></Text>
                <Text style={styles.title}>Thursday</Text>
                <Text>How many calories did you intake this meal?</Text>
        
                <TextInput 
                keyboardType='numeric'
                style={styles.input}
                placeholder='Enter calorie count e.g 500'
                returnKeyType='submit'
                onChangeText={setUserInputThur}
                />
    
                <Button onPress={() => totalCount(userInputThur, thur,'thur')} title='Submit' />
                <Text>Calorie intake for the day:</Text>
                <Text>{thur}</Text>
                <Text>_________________________________________</Text>

                <Text></Text>
                <Text style={styles.title}>Friday</Text>
                <Text>How many calories did you intake this meal?</Text>
        
                <TextInput 
                keyboardType='numeric'
                style={styles.input}
                placeholder='Enter calorie count e.g 500'
                returnKeyType='submit'
                onChangeText={setUserInputFri}
                />
    
                <Button onPress={() => totalCount(userInputFri, fri,'fri')} title='Submit' />
                <Text>Calorie intake for the day:</Text>
                <Text>{fri}</Text>
                <Text>_________________________________________</Text>

                <Text></Text>
                <Text style={styles.title}>Saturday</Text>
                <Text>How many calories did you intake this meal?</Text>
        
                <TextInput 
                keyboardType='numeric'
                style={styles.input}
                placeholder='Enter calorie count e.g 500'
                returnKeyType='submit'
                onChangeText={setUserInputSat}
                />
    
                <Button onPress={() => totalCount(userInputSat, sat,'sat')} title='Submit' />
                <Text>Calorie intake for the day:</Text>
                <Text>{sat}</Text>
                <Text>_________________________________________</Text>

                <Text></Text>
                <Text style={styles.title}>Sunday</Text>
                <Text>How many calories did you intake this meal?</Text>
        
                <TextInput 
                keyboardType='numeric'
                style={styles.input}
                placeholder='Enter calorie count e.g 500'
                returnKeyType='submit'
                onChangeText={setUserInputSun}
                />
    
                <Button onPress={() => totalCount(userInputSun, sun,'sun')} title='Submit' />
                <Text>Calorie intake for the day:</Text>
                <Text>{sun}</Text>
                <Text>_________________________________________</Text>        

                <Text>Calorie intake for the week: {total}</Text>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#fff',
        flexDireciton: 'column',
        paddingBottom: 60,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});