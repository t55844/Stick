import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import tw from 'tailwind-react-native-classnames';
import { Picker } from '@react-native-picker/picker';
interface ProposalProps {
    proposals: { companyName: string, price: number, duration: number, progress: number, description: string }[]
}

export default function ProposalList(props: ProposalProps) {
    const { proposals } = props
    return (
        <View style={tw`flex-1 bg-white p-4`}>
            {proposals.map((proposal) => (
                <View key={Math.random()} style={tw`border-b-2 border-gray-200 py-4`}>
                    <Text style={tw`text-base font-medium text-gray-800`}>
                        {proposal.companyName}
                    </Text>
                    <Text style={tw`text-sm font-medium text-gray-500 mb-1`}>
                        Price: {'$ ' + proposal.price} | Duration: {proposal.duration + ' days'}
                    </Text>
                    <ProgressBar
                        progress={(proposal.progress || 0) / 100}
                        width={null}
                        height={10}
                        style={tw`mb-4`}
                        color={tw.color('green-500')}
                    />
                </View>
            ))}
        </View>
    );
};