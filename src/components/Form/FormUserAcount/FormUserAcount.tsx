import React, { useState } from "react";
import FormModel from "../FormModel"
import { Response } from "../../../functions/store";
import Button from "../../Button";
import { ScrollView } from "react-native-gesture-handler";
import * as yup from "yup";
import { emailSchema, passwordSchema } from "../genericSchemeValidation";

const schema = yup.object({
    name: yup.string().trim().required('this is required'),
    email: emailSchema,
    password: passwordSchema
}).required();

export type FormRegister = yup.InferType<typeof schema>;

export default function FormUserAcount() {
    const [registered, setRegistered] = useState<boolean>(true)

    function handleDataRegister(data): Response {
        console.log('handled with success');
        console.log(data);
        return { error: true, data: 'oi' }
    }
    if (registered) {
        return (
            <ScrollView>
                < FormModel
                    textFields={[['Email', 'email', false], ['Password', 'password', true]]}
                    handleData={handleDataRegister}
                    textFailure="Password or Email not found try again later"
                    textSuccess="You have successfully logged in"
                    titleOfForm="Make your Login"
                />
                <Button width="w-1/4" onPress={() => setRegistered(false)} title="Register" />
            </ScrollView>
        )

    } else {
        return (
            <ScrollView>
                < FormModel
                    schema={schema}
                    textFields={[['Email', 'email', false], ['Name', 'name', false], ['Password', 'password', true]]}
                    handleData={handleDataRegister}
                    textFailure="This email has already been used by another"
                    textSuccess="You has been successfully registered"
                    titleOfForm="Register "
                />
                <Button width='w-1/4' onPress={() => setRegistered(true)} title="Login" />


            </ScrollView>
        )


    }
}