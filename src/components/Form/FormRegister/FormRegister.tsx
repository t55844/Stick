import React from "react";
import FormModel from "../FormModel"
import { Response } from "../../../functions/store";

export default function FormRegister() {

    function handleData(data): Response {
        console.log('handled with success');
        console.log(data);
        return { error: false, data: 'oi' }
    }

    return (
        <FormModel
            fields={[['Email', 'email', false], ['Password', 'password', true]]}
            handleData={handleData}
            textFailure="Password or Email not found try again later"
            textSuccess="You have successfully logged in"
            titleOfForm="Make your Login"
        />
    )
}