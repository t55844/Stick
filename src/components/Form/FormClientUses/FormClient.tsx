import React, { useState } from "react";
import FormModel from "../FormModel";
import { Response } from "../../../functions/store";
import * as yup from "yup";
import { emailSchema, passwordSchema } from "../genericSchemeValidation";
import { ScrollView } from "react-native";
import Button from "../../Button";

const schemaClientRegister = yup.object({
    clientName: yup.string().trim().required('The Client name has been provided'),
    companyName: yup.string().trim().required('The Company name has been provided'),
    email: emailSchema,
    password: passwordSchema,

}).required();

export default function FormClient() {
    const [registered, setRegistered] = useState<boolean>(true)


    function handleData(data): Response {
        console.log(' Client success');
        console.log(data);
        return { error: true, data: 'oi' }
    }
    if (registered) {
        return (
            <ScrollView>
                <FormModel
                    textFields={[['Client name', 'clientName', false], ['Company Name', 'companyName', false], ['Email', 'email', false], ['Password', 'password', true]]}
                    handleData={handleData}
                    titleOfForm="Client Register"
                    textFailure="The email or company name has already been registered"
                    textSuccess="The Client was successfully registered"
                    schema={schemaClientRegister}
                />
                <Button width="w-1/4" onPress={() => setRegistered(false)} title="Register" />
            </ScrollView>
        )

    } else {
        return (
            <ScrollView>
                < FormModel
                    textFields={[['Email', 'email', false], ['Name', 'name', false], ['Password', 'password', true]]}
                    handleData={handleData}
                    textFailure="Password or Email not found try again later"
                    textSuccess="You have successfully logged in"
                    titleOfForm="Make your Login"

                />
                <Button width='w-1/4' onPress={() => setRegistered(true)} title="Login" />


            </ScrollView>
        )


    }
}