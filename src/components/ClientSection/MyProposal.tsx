import React from "react";
import ProposalList from "./ProposalList";


export default function MyProposal() {

    return (
        <ProposalList proposals={[
            { company: 'Company A', price: 1000, duration: 7, progress: 50 },
            { company: 'Company B', price: 2000, duration: 14, progress: 75 },
            { company: 'Company C', price: 1500, duration: 10, progress: 90 },
        ]} />
    )
}