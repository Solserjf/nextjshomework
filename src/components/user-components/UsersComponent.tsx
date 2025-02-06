import {GetAllUsers} from "@/services/api.service";
import Link from "next/link";

export const UsersComponent = async () => {
const users = await GetAllUsers();
    return (
        <div>
            {
                users.map((item) => <div key={item.id}><Link href={{pathname:'/users/' + item.id.toString(),query: {data: JSON.stringify(item)} }}>{item.id} {item.name} {item.username}</Link></div>)
            }
        </div>
    );
};