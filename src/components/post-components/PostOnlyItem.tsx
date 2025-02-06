import {IPost} from "@/models/posts/IPost";

type PostOnlyItemProps = {
    item: IPost;
}

export const PostOnlyItem = ({item}: PostOnlyItemProps) => {
    return (
        <div>
            {
                <div>
                    {item.id} {item.userId} {item.title} {item.body}
                </div>
            }
        </div>
    );
};