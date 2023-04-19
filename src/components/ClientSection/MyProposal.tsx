import React, { useContext, useEffect } from "react";
import ProposalList from "./ProposalList";
import { MyContext } from "../MainContext";


export default function MyProposal() {
    const { proposals, email } = useContext(MyContext)
    return (
        <ProposalList proposals={
            email.length > 0 && proposals !== undefined && proposals.length !== 0 ?
                proposals :
                [
                    { companyName: 'Company A', price: 1000, duration: 7, progress: 50, description: 'ldescription about service' },
                    { companyName: 'Company B', price: 2000, duration: 14, progress: 75, description: 'ldescription about service' },
                    { companyName: 'Company C', price: 1500, duration: 10, progress: 90, description: 'ldescription about service' },
                ]
        } />
    )
}