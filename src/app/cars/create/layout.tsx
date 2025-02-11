import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: " CarCreateLayout metadata"
}

type Props = {children: React.ReactNode}
const CarCreateLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default CarCreateLayout;