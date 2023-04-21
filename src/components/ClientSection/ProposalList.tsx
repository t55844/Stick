import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import tw from 'tailwind-react-native-classnames';
import ModalWrapper from '../ModalWraper';
import ProposalChangeWindow from './ProposalChangeWindow';
import Button from '../Button';
import { MyContext } from '../MainContext';
import { Proposals } from '../../functions/store';
interface ProposalProps {
    proposals: { companyName: string, price: number, duration: number, progress: number, description: string }[]
}

export default function ProposalList(props: ProposalProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const { email, showSnackbackBar } = useContext(MyContext)
    const [proposalToChange, setProposalToChange] = useState<Proposals>()
    function closeModal() {
        setModalVisible(false);
    }

    function showModal(proposal: Proposals, index: number) {
        if (email.length > 0) {
            proposal['index'] = index
            setModalVisible(true)
            setProposalToChange(proposal)
        } else {
            showSnackbackBar('you must be logged ', 'failed')
        }
    }

    const { proposals } = props
    return (
        <View className={`flex-1 bg-white p-4`}>
            {proposals.map((proposal, index) => (
                <View key={Math.random()} className={`border-b-2 border-gray-200 py-4`}>
                    <Text className={`text-base font-medium text-gray-800`}>
                        {proposal.companyName}
                    </Text>
                    <Text className={`text-sm font-medium text-gray-500 mb-1`}>
                        Price: {'$ ' + proposal.price} | Duration: {proposal.duration + ' days'}
                    </Text>
                    <ProgressBar
                        progress={(proposal.progress || 0) / 100}
                        width={null}
                        height={10}
                        className={`mb-4`}
                        color={tw.color('green-500')}
                    />
                    <Button onPress={() => showModal(proposal, index)} title='Update status' />
                </View>
            ))}
            <ModalWrapper closeModal={closeModal} isVisible={modalVisible}>
                <ProposalChangeWindow closeModal={closeModal} proposalToChange={proposalToChange} />
            </ModalWrapper>
        </View>
    );
};