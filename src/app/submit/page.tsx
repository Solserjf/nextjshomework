import { FC } from "react";

type CarPropsType = {
    searchParams: { [key: string]: string | string[] | undefined };
};

const SubmitPage: FC<CarPropsType> = ({ searchParams }) => {
    return (
        <>
            <h1>Car Created Successfully!</h1>
            <p>Brand: {searchParams.brand}</p>
            <p>Price: {searchParams.price}</p>
            <p>Year: {searchParams.year}</p>
        </>
    );
};

export default SubmitPage;
