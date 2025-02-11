import Link from "next/link";

export const Menu = () => {
    return (
        <ul>
            <li><Link href={'/cars'}>cars</Link></li>
            <li><Link href={'/cars/create'}>create</Link></li>
        </ul>
    );
};