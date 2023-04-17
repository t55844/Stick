import React, { useContext, useState } from "react";
import FormModel from "../FormModel"
import { Response, setToStorage } from "../../../functions/store";
import Button from "../../Button";
import { ScrollView } from "react-native-gesture-handler";
import * as yup from "yup";
import { emailSchema, loguinSchema, passwordSchema } from "../genericSchemeValidation";
import FormLoguinUser from "./FormLoguinUser";

const schema = yup.object({
    name: yup.string().trim().required('this is required'),
    email: emailSchema,
    password: passwordSchema
}).required();

export type FormRegister = yup.InferType<typeof schema>;

export default function FormUserAcount() {
    const [registered, setRegistered] = useState<boolean>(true)

    async function handleDataRegister(data): Promise<Response> {
        return await setToStorage(data, 'user')
    }
    if (registered) {
        return (
            <ScrollView className='bg-primary-100'>
                <FormLoguinUser />
                <Button width="w-1/4" onPress={() => setRegistered(false)} title="Register" />
            </ScrollView>
        )

    }
    if (!registered) {
        return (
            <ScrollView className='bg-primary-100'>
                < FormModel
                    schema={schema}
                    textFields={[['Name', 'name', false], ['Email', 'email', false], ['Password', 'password', true]]}
                    handleData={handleDataRegister}
                    textFailure="This email has already been used by another"
                    textSuccess="You has been successfully registered"
                    titleOfForm="Register "
                    buttonName="Send"
                />
                <Button width='w-1/4' onPress={() => setRegistered(true)} title="Login" />


            </ScrollView>
        )


    }
}