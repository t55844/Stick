import React, { useState } from "react";
import FormModel from "../FormModel"
import { Response } from "../../../functions/store";
import Button from "../../Button";
import { ScrollView } from "react-native-gesture-handler";
import * as yup from "yup";

const schemaRegister = yup.object({
    name: yup.string().trim().required('this is required'),

    email: yup.string().trim()
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'this must be an email ( email@email.email ) '
        ).required('this is required'),

    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])/,
            'Password must contain at least one uppercase and one lowercase character ( 123456Aa )'
        )
        .required('Password is required'),
}).required();
type FormRegister = yup.InferType<typeof schemaRegister>;

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
                    fields={[['Email', 'email', false], ['Password', 'password', true]]}
                    handleData={handleDataRegister}
                    textFailure="Password or Email not found try again later"
                    textSuccess="You have successfully logged in"
                    titleOfForm="Make your Login"
                />
                <Button onPress={() => setRegistered(false)} title="Register" />
            </ScrollView>
        )

    } else {
        return (
            <ScrollView>
                < FormModel
                    schema={schemaRegister}
                    fields={[['Email', 'email', false], ['Name', 'name', false], ['Password', 'password', true]]}
                    handleData={handleDataRegister}
                    textFailure="This email has already been used by another"
                    textSuccess="You has been successfully registered"
                    titleOfForm="Register "
                />
                <Button onPress={() => setRegistered(true)} title="Login" />


            </ScrollView>
        )


    }
}