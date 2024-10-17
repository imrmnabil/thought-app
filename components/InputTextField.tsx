import  React, {useEffect, useState} from 'react';
import { TextInput, useTheme } from 'react-native-paper';

type Props = {
    text:string;
    label:string;
    handleChangeText: (e:string)=>void;
    notEditable?: boolean;
}



const InputeTextField= ({text,handleChangeText, label, notEditable}:Props) => {
  const theme = useTheme();

  return (
    <TextInput
    className=''
    style={{paddingHorizontal:10}}
    outlineStyle={{borderRadius:999}}
    mode='outlined'
    secureTextEntry={label === 'Password' ? true : false}
    autoCapitalize='none'
    keyboardType={label === 'Email' ? 'email-address':'ascii-capable'}
      label={label}
      value={text}
      onChangeText={handleChangeText}
      editable = {notEditable ? false: true}
    />
  );
};

export default InputeTextField;