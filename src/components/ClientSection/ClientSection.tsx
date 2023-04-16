import React from "react";
import { ScrollView, View } from "react-native";
import FormClient from "../Form/FormClientUses/FormClient";
import FormProposal from "../Form/FormClientUses/FormProposal";
import MyProposal from "./MyProposal";
import TitleOfSection from "../TitleOfSection";

export default function ClientSection() {
    return (

        <ScrollView>
            <View className='w-full m-auto mt-5 mb5'>
                <TitleOfSection text="My Proposal" />
                <MyProposal />
            </View>
            <View className='w-full m-auto mt-5 mb5'>
                <FormProposal />
            </View>
            <View className='w-full m-auto mt-5 mb5'>
                <FormClient />
            </View>
        </ScrollView>
    )
}