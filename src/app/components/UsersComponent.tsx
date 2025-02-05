import {GetAllUsers} from "@/app/services/api.service";
import Link from "next/link";

export const UsersComponent = async () => {
const users = await GetAllUsers();
    return (
        <div>
            {
                users.map((item) => <div key={item.id}><Link href={item.id.toString()}>{item.id} {item.name} {item.username}</Link></div>)
            }
        </div>
    );
};