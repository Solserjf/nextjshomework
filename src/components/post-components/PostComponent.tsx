import {IPost} from "@/models/posts/IPost";

type PostComponentProps = {
    item: IPost;
}

export const PostComponent = ({item}: PostComponentProps) => {
    return (
        <div>
            {
                <div>
                    {item.id} {item.userId} {item.title}
                </div>
            }
        </div>
    );
};