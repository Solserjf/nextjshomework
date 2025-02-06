
import {SearchParams} from "next/dist/server/request/search-params";
import {GetOnePost} from "@/services/api.service";

type PropsTypePostPage = {
    params:Promise <{id: string}>;
    searchParams:Promise <SearchParams>;
}

 const PostPage = async ({params, searchParams}: PropsTypePostPage) => {
     const {id} = await params;
     const {data} = await searchParams;

     const post = await GetOnePost(id);
     let obj = null;
     if (typeof data === "string") {
         obj = (JSON.parse(data))
     }

    return (
        <div>
            {
                obj && <>{obj.id} {obj.userId} {obj.title} {obj.body}</>
            }
        </div>
    );
};

export default PostPage;