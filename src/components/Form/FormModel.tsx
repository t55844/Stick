import React, { useContext, useMemo, useState } from "react";
import { Text, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";
import { Response } from "../../functions/store";
import Button from "../Button";
import Snackbar from "../Feedback/Snackbar";
import Input from "./TextInput";
import TitleOfSection from "../TitleOfSection";
import WarningTextBox from "../WarningTextBox";
import { yupResolver } from '@hookform/resolvers/yup';
import { MyContext } from "../MainContext";


export interface FormModel {

    textFields: ([string, string, boolean] | [string, string, boolean, 'numeric' | 'email' | 'address' | 'phone' | 'pad'])[]
    textSuccess: string
    textFailure: string
    handleData(data: any): Promise<Response>
    titleOfForm: string
    schema: any
    buttonName?: string

}

// FormModel is an set of components that are combined to create 
// a form with flexibility but without having to manually mount each part

export default function FormModel(props: FormModel) {
    const { buttonName, textFields, textSuccess, textFailure, handleData, titleOfForm, schema } = props


    // useForm is an hook provided by reack hook form, that returns methods for creating form
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        reValidateMode: "onSubmit"
    });

    //status that contain the text feedback for onSubmit response
    const { showSnackbackBar } = useContext(MyContext)
    //onSubmit that handle with data and response
    // receive handleData method that has been passed on create form
    const onSubmit = async (data) => {
        const resp = await handleData(data)
        resp.error ?
            showSnackbackBar(textFailure, 'failed') :
            showSnackbackBar(textSuccess, 'success')

    };

    return (
        <ScrollView>

            <TitleOfSection text={titleOfForm} />
            <View className=' bg-secondary-400 p-3 mt-4 flex flex-col justify-around'>


                {textFields.map(field => ( /*
                this get 'textField' ( an array of [ string, string, boolean, and maybe numeric ] ) property 
                and get each item of array that is used to make one input:
                item[0] = placeholder, item[1] = name, item[2] = is secureTextEntry ( need to be a password ) ,
                 item[3] = keyboardType ('numeric' | 'email' | 'address' | 'phone' | 'pad' | 'default')

                */
                    <Controller
                        key={Math.random()}
                        control={control}
                        rules={{
                            required: true,
                        }}
                        defaultValue={''}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <Input // input of form
                                    secureTextEntry={field[2]}
                                    placeholder={field[0]}
                                    onBlur={onBlur}
                                    onChangeText={(value) => onChange(value)}
                                    value={value}
                                    keyboardType={field[4] || 'default'}
                                />
                                {// field erro menssage
                                    errors[field[1]] && <WarningTextBox duration={10000} text={` ${errors[field[1]].message}.`} />}
                            </View>
                        )}
                        name={field[1]}
                    />

                ))}

                <Button onPress={handleSubmit(onSubmit)} title={buttonName || ' Submit'} />

            </View>
        </ScrollView >
    )
}