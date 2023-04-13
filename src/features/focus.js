import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import {spacing, fontSizes } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What are you focusing on?"
        />
        <View style={styles.rButton}>
          <RoundedButton title="+" size={50} onPress={()=>addSubject(subject)}/> 
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    justifyContent: 'top',
    padding: spacing.md,
    flexDirection: 'row',
  },
  rButton: {
    justifyContent: 'center',
  },
});
