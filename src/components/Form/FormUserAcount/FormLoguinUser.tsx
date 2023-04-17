import React, { useContext, useState } from "react";
import { loguinSchema } from "../genericSchemeValidation";
import { MyContext } from "../../MainContext";
import { makeLoguin } from "../../../functions/login";
import { Response } from "../../../functions/store";
import FormModel from "../FormModel";


export default function FormLoguinUser() {
    const { setEmail, setUserInfo } = useContext(MyContext)

    async function handleDataLogin(data): Promise<Response> {
        const response = await makeLoguin(data, 'user')
        if (response.error) {
            return response
        } else {

            setEmail(response.data.email)
            setUserInfo(response.data)
            return response
        }
    }
    return (
        < FormModel
            textFields={[['Email', 'email', false], ['Password', 'password', true]]}
            handleData={handleDataLogin}
            textFailure="Password or Email not found try again later"
            textSuccess="You have successfully logged in"
            titleOfForm="Make your Login"
            schema={loguinSchema}
            buttonName="Enter"
        />
    )
}