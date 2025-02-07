import {IComment} from "@/models/comments/IComment";

type CommentComponentProps = {
    item: IComment;
}

export const CommentComponent = ({item}: CommentComponentProps) => {
    return (
        <div>
            {
                <div>
                    {item.id} {item.name} {item.email} {item.body} {item.postId}
                </div>
            }
        </div>
    );
};