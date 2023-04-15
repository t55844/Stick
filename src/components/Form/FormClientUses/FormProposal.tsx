import React from "react";
import FormModel from "../FormModel";
import { Response } from "../../../functions/store";
import * as yup from "yup";

const schema = yup.object({
    description: yup.string().trim().required('The Client name has been provided'),
    companyName: yup.string().trim().required('The Company name has been provided'),
    price: yup.string().required('The Price has been provided'),
    duration: yup.string().required('The Duration has been provided')
}).required();

export default function FormProposal() {

    function handleData(data): Response {
        console.log(' Proposal success');
        console.log(data);
        return { error: true, data: 'oi' }
    }

    return (

        <FormModel
            textFields={[['Description', 'description', false], ['Company Name', 'companyName', false], ['Price', 'price', false, "numeric"], ['Duration', 'duration', false]]}
            handleData={handleData}
            titleOfForm="Make an Proposal"
            textFailure="The Proposal has not been submitted try again later"
            textSuccess="The Proposal has been submitted congratulations !!!"
            schema={schema}
        />

    )

}