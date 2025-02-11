import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: " FormLayout metadata"
}

type Props = {children: React.ReactNode}
const FormLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default FormLayout;