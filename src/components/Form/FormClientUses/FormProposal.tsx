import React, { useContext } from "react";
import FormModel from "../FormModel";
import { Response, getFromStorage, setToStorage } from "../../../functions/store";
import * as yup from "yup";
import { MyContext } from "../../MainContext";

interface FormProposalProps {
    showModal: () => void
}

const schema = yup.object({
    description: yup.string().trim().required('The Client name has been provided'),
    companyName: yup.string().trim().required('The Company name has been provided'),
    price: yup.string().required('The Price has been provided'),
    duration: yup.string().required('The Duration has been provided')
}).required();

export type FormProposal = yup.InferType<typeof schema>;


export default function FormProposal(props: FormProposalProps) {
    const { showModal } = props
    const { email, setProposals } = useContext(MyContext)

    async function handleData(data): Promise<Response> {
        if (email !== '') {
            data['email'] = email;
            await setToStorage(data, 'proposals')

            const newProposals = await getFromStorage({ email }, 'proposals')
            setProposals(newProposals.proposals)

            return newProposals
        } else {
            showModal()
            return { error: true }
        }

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