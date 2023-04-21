import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Proposals, Response, updateProposals } from "../../functions/store";
import FormModel from "../Form/FormModel";
import * as yup from 'yup'
import { MyContext } from "../MainContext";

interface ProposalChangeWindowProps extends Proposals {
    index: number;
}

const schema = yup.object({
    status: yup.string().required(' write some information about the state of the proposal'),
    progress: yup.string().required(' the progress must be one number between 0 and 100'),
})

type FormUpdateProposal = yup.InferType<typeof schema>


export default function ProposalChangeWindow(props: { proposalToChange: ProposalChangeWindowProps, closeModal: () => void }) {
    const { index, companyName, description, duration, price } = props.proposalToChange
    const { closeModal } = props
    const { proposals, setProposals } = useContext(MyContext)

    async function handleData(data: FormUpdateProposal): Promise<Response<Proposals[]>> {

        const responseProposal = await updateProposals(proposals, data, index)
        setProposals(responseProposal.data)
        closeModal()
        return responseProposal

    }

    return (
        <View className={`p-4`}>
            <View className={`flex-row justify-between items-center mb-4`}>
                <Text className={`font-bold text-lg`}>{companyName}</Text>
                <View className={`flex-row`}>
                    <Text className={`text-lg`}>$ {price}  / </Text>
                    <Text className={`text-lg`}>{duration} days</Text>
                </View>
            </View>
            <Text>Description: {description}.</Text>
            <View>
                <FormModel
                    textFailure="Not possible update, try again later"
                    textSuccess="Information updated successfully"
                    schema={schema}
                    handleData={handleData}
                    textFields={[['Status', 'status', false, 'numeric'], ['23%', 'progress', false, 'numeric']]}
                    titleOfForm="Update infos"
                    buttonName="send changes"
                />
            </View>
        </View>
    )
}