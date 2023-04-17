import React, { useState } from "react";
import FormModel from "../FormModel";
import { Response, setToStorage } from "../../../functions/store";
import * as yup from "yup";
import { emailSchema, loguinSchema, passwordSchema } from "../genericSchemeValidation";

const schema = yup.object({
    clientName: yup.string().trim().required('The Client name has been provided'),
    companyName: yup.string().trim().required('The Company name has been provided'),
    email: emailSchema,
    password: passwordSchema,

}).required();

export type FormClient = yup.InferType<typeof schema>;


export default function FormClientRegister() {

    async function handleData(data): Promise<Response> {
        return await setToStorage(data, 'client')
    }
    return (
        <FormModel
            textFields={[['Client name', 'clientName', false], ['Company Name', 'companyName', false], ['Email', 'email', false], ['Password', 'password', true]]}
            handleData={handleData}
            titleOfForm="Client Register"
            textFailure="The email or company name has already been registered"
            textSuccess="The Client was successfully registered"
            schema={schema}
        />
    )
}