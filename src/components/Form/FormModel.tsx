import React, { useContext, useState } from "react";
import { View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";
import { Response } from "../../functions/store";
import Button from "../Button";
import Snackbar from "../Feedback/Snackbar";
import Input from "./TextInput";
import TitleOfSection from "../TitleOfSection";


export interface FormModel {

    fields: [string, string, boolean][]
    textSuccess: string
    textFailure: string
    handleData(data): Response
    titleOfForm: string
}

export default function FormModel(props: FormModel) {
    const { fields, textSuccess, textFailure, handleData, titleOfForm } = props
    const { control, handleSubmit, formState: { errors } } = useForm();

    const [handleResponse, setHandleResponse] = useState<string[] | ''>('')

    const onSubmit = async (data) => {
        console.log(data)
        const resp = handleData(data)
        resp.error ?
            setHandleResponse([textFailure, 'failed']) :
            setHandleResponse([textSuccess, 'success'])

        setTimeout(() => setHandleResponse(''), 6000)
    };

    return (
        <ScrollView>

            <TitleOfSection text={titleOfForm} />
            <View className=' bg-secondary-400 p-3 mt-4 flex flex-col justify-around'>


                {fields.map(field => (
                    <Controller
                        key={Math.random()}
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                secureTextEntry={field[2]}
                                placeholder={field[0]}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name={field[1]}
                    />

                ))}

                {handleResponse.length === 0 ? null :
                    <Snackbar text={handleResponse[0]} type={handleResponse[1]} />

                }
                <Button onPress={handleSubmit(onSubmit)} title="Submit" />

            </View>
        </ScrollView >
    )
}