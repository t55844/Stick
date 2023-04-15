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


export interface FormModel {

    fields: [string, string, boolean][]
    textSuccess: string
    textFailure: string
    handleData(data: any): Response
    titleOfForm: string
    schema?: any
}

export default function FormModel(props: FormModel) {
    const { fields, textSuccess, textFailure, handleData, titleOfForm, schema } = props


    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        reValidateMode: "onSubmit"
    });


    const [handleResponse, setHandleResponse] = useState<string[] | ''>('')

    const onSubmit = async (data) => {
        console.log(data)
        const resp = handleData(data)
        resp.error ?
            setHandleResponse([textFailure, 'failed']) :
            setHandleResponse([textSuccess, 'success'])

        setTimeout(() => setHandleResponse(''), 6000)
    };
    const memoizedOnSubmit = useMemo(() => handleSubmit(onSubmit), [handleSubmit, onSubmit]);

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
                        defaultValue={''}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <Input
                                    secureTextEntry={field[2]}
                                    placeholder={field[0]}
                                    onBlur={onBlur}
                                    onChangeText={(value) => onChange(value)}
                                    value={value}
                                />
                                {errors[field[1]] && <WarningTextBox duration={10000} text={` ${errors[field[1]].message}.`} />}
                            </View>
                        )}
                        name={field[1]}
                    />

                ))}

                {handleResponse.length === 0 ? null :
                    <Snackbar text={handleResponse[0]} type={handleResponse[1]} />

                }
                <Button onPress={memoizedOnSubmit} title="Submit" />

            </View>
        </ScrollView >
    )
}