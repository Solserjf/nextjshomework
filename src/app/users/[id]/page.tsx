import {FC, memo} from "react";
import {GetOneUser} from "@/services/api.service";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/users/IUser";


type PropsTypeUserPage = {
    params:Promise <{ id: string }>;
    searchParams:Promise <SearchParams>;
}

const UserPage:FC<PropsTypeUserPage> = async ({params, searchParams} ) => {
    const {id} = await params;
    const {data} = await searchParams;
    let objUser = null;
    const user = await GetOneUser(id);
    if (typeof data === "string") {
        objUser = (JSON.parse(data)) as IUser;
    }
   return (
       <div>
           {
               objUser && <>{objUser.id} {objUser.name} {objUser.username} {objUser.email} {objUser.phone} {objUser.website}</>
           }
       </div>
   )
}

export default memo(UserPage);