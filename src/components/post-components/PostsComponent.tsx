import {GetAllPosts} from "@/services/api.service";
import Link from "next/link";

export const PostsComponent = async () => {
const posts = await GetAllPosts();
    return (
        <div>
            {
                posts.map((item) => <div key={item.id}><Link href={{pathname:'/posts/' + item.id.toString(),query: {data: JSON.stringify(item)} }}>{item.id} {item.userId} {item.title}</Link></div>)
            }
        </div>
    );
};