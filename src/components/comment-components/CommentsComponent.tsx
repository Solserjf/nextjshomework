import {GetAllComments} from "@/services/api.service";
import Link from "next/link";

export const CommentsComponent = async () => {
const comments = await GetAllComments();
    return (
        <div>
            {
                comments.map((item) => <div key={item.id}><Link href={{pathname:'/comments/' + item.id.toString(),query: {data: JSON.stringify(item)} }}>{item.id} {item.name} {item.postId}</Link></div>)
            }
        </div>
    );
};