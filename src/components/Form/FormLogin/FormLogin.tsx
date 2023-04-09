import React, { useContext, useState } from "react";
import { Text, View } from 'react-native';
import Input from "../TextInput";
import { useForm, Controller } from "react-hook-form";
import Button from "../../Button";
import { MyContext, Response } from "../../MainContext";
import Snackbar from "../../Feedback/Snackbar";
import { ScrollView } from "react-native-gesture-handler";
import TitleOfSection from "../../TitleOfSection";


export interface FormLogin {
    name: string
    email: string
    senha: string
}

export default function FormLogin() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormLogin>({
        defaultValues: {

        }
    });

    const [handleResponse, setHandleResponse] = useState<string[] | ''>('')
    const context = useContext(MyContext)

    const onSubmit = async (data: FormLogin) => {
        console.log(data)
        const resp = await context.setToStorage(data, 'login')
        resp.error ?
            setHandleResponse(['This email has already been used by another', 'failed']) :
            setHandleResponse(['You has been successfully registered', 'success'])

        setTimeout(() => setHandleResponse(''), 6000)
    };

    return (
        <ScrollView>


            <TitleOfSection text="Make your Login or register" />
            <View className=' bg-secondary-400 p-3 mt-4 flex flex-col justify-around'>

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            secureTextEntry={false}
                            placeholder="Name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="name"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            secureTextEntry={false}
                            placeholder="Email"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="email"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            secureTextEntry={true}
                            placeholder="Password "
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="password"
                />

                {handleResponse.length === 0 ? null :
                    <Snackbar text={handleResponse[0]} type={handleResponse[1]} />

                }
                <Button onPress={handleSubmit(onSubmit)} title="Submit" />

            </View>
        </ScrollView>
    )
}