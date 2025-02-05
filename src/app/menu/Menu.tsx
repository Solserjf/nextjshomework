import Link from "next/link";

export const Menu = () => {
    return (
        <ul>
            <li> <Link href={'/'}>users</Link></li>
            <li> <Link href={'/'}>posts</Link></li>
            <li> <Link href={'/'}>comments</Link></li>
        </ul>
    );
};