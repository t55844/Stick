import React from "react";
import { ScrollView } from "react-native";
import FormClient from "../Form/FormClientUses/FormClient";
import FormProposal from "../Form/FormClientUses/FormProposal";

export default function ClientSection() {
    return (

        <ScrollView>
            <FormProposal />
            <FormClient />
        </ScrollView>
    )
}