import {IUser} from "@/models/IUser";

type UserComponentProps = {
    item: IUser;
}

export const UserComponent = ({item}: UserComponentProps) => {
    return (
        <div>
            {
                <div>
                    {item.id} {item.name} {item.username}
                </div>
            }
        </div>
    );
};