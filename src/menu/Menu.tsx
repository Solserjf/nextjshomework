import Link from "next/link";

export const Menu = () => {
    return (
        <ul>
            <li> <Link href={'/public'}>users</Link></li>
            <li> <Link href={'/public'}>posts</Link></li>
            <li> <Link href={'/public'}>comments</Link></li>
        </ul>
    );
};