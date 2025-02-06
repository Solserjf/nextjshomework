import {FC, memo} from "react";
import {GetOneUser} from "@/services/api.service";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";


type PropsTypeUserPage = {
    params:Promise <{ id: string }>;
    searchParams:Promise <SearchParams>;
}

const UserPage:FC<PropsTypeUserPage> = async ({params, searchParams} ) => {
    const {id} = await params;
    const {data} = await searchParams;
    let obj = null;
    const user = await GetOneUser(id);
    if (typeof data === "string") {
        obj = (JSON.parse(data)) as IUser;
    }
   return (
       <div>
           {
               obj && <>{obj.id} {obj.name} {obj.username} {obj.phone}</>
           }
       </div>
   )
}

export default memo(UserPage);