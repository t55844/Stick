import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import FormClient from "../Form/FormClientUses/FormClient";
import FormProposal from "../Form/FormClientUses/FormProposal";
import MyProposal from "./MyProposal";
import TitleOfSection from "../TitleOfSection";
import ModalWrapper from "../ModalWraper";
import Button from "../Button";

export default function ClientSection() {

    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    };

    return (

        <ScrollView className='bg-primary-100 '>
            <View className='w-full m-auto mt-5 mb5'>
                <TitleOfSection text="My Proposal" />
                <MyProposal />
            </View>
            <View className='w-full m-auto mt-5 mb-5 mb5'>
                <FormProposal
                    showModal={() => setModalVisible(true)}
                />
            </View>
            <ModalWrapper isVisible={modalVisible} closeModal={closeModal}>
                <View className={` w-full m-auto mb-10 mt-5 mb5`}>
                    <FormClient />
                </View>
            </ModalWrapper>

            <Button
                onPress={() => setModalVisible(true)}
                title="Client Registration/Logguin"
                width="w-3/4"
            />
        </ScrollView>
    )
}