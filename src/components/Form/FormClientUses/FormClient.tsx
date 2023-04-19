import React, { useContext, useState } from "react";
import FormModel from "../FormModel";
import { Response } from "../../../functions/store";
import { loguinSchema } from "../genericSchemeValidation";
import { ScrollView } from "react-native";
import Button from "../../Button";
import FormClientRegister from "./FormClientRegister";
import { MyContext } from "../../MainContext";
import { makeLoguin } from "../../../functions/login";



export default function FormClient() {
    const [registered, setRegistered] = useState<boolean>(true)
    const { setEmail, setClientInfo } = useContext(MyContext)

    async function handleData(data): Promise<Response> {
        const response = await makeLoguin(data, 'client')

        if (response.error) {
            return response
        } else {

            setEmail(response.data.email)
            setClientInfo({ name: response.data.clientName, companyName: response.data.companyName })
            return response
        }
    }
    if (registered) {
        return (
            <ScrollView>
                <FormClientRegister />
                <Button width="w-1/4" onPress={() => setRegistered(false)} title="Login" />
            </ScrollView>
        )

    } else {
        return (
            <ScrollView>
                < FormModel
                    textFields={[['Email', 'email', false], ['Password', 'password', true]]}
                    handleData={handleData}
                    textFailure="Password or Email not found try again later"
                    textSuccess="You have successfully logged in"
                    titleOfForm="Client Login"
                    schema={loguinSchema}

                />
                <Button width='w-1/4' onPress={() => setRegistered(true)} title="Register" />


            </ScrollView>
        )


    }
}