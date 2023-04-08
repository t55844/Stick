import React, { useContext } from "react";
import { View } from 'react-native';
import Input from "../TextInput";
import { useForm, Controller } from "react-hook-form";
import Button from "../../Button";
import { MyContext, Response } from "../../MainContext";


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

    function handleResponse(text: string, backgroundColor: string) {

    }

    const context = useContext(MyContext)
    const onSubmit = async (data: FormLogin) => {
        console.log(data)
        const resp = await context.setToStorage(data, 'login')
        resp.error ?
            handleResponse('This email has already been used by another', 'red') :
            handleResponse('You has been successfully registered', 'green')
    };

    return (
        <View className='mt-4 flex flex-col justify-around'>

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

            <Button onPress={handleSubmit(onSubmit)} title="Submit" />

        </View>
    )
}