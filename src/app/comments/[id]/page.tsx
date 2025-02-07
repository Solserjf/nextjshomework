import {SearchParams} from "next/dist/server/request/search-params";
import {GetOneComment} from "@/services/api.service";
import {FC} from "react";
import {IComment} from "@/models/comments/IComment";

type PropsTypeCommentPage = {
    params:Promise <{id: string}>;
    searchParams:Promise <SearchParams>;
}


 const CommentPage:FC<PropsTypeCommentPage> = async  ({params, searchParams}: PropsTypeCommentPage) => {
    const {id} = await params;
    const {data} = await searchParams;
    const comment = await GetOneComment(id);
    let objComment = null;
     if (typeof data === "string") {
         objComment = (JSON.parse(data)) as IComment;
     }
    return (
        <div>
            {
                objComment && <>{objComment.id} {objComment.postId} {objComment.name} {objComment.body} {objComment.email}</>
            }
        </div>
    );

};

export default CommentPage;