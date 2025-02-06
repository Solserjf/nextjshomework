import {IUser} from "@/models/IUser";

type UserOnlyItemProps = {
    item: IUser;
}

export const UserOnlyItem = ({item}: UserOnlyItemProps) => {
    return (
        <div>
            {
                <div>
                    {item.id} {item.name} {item.username} {item.email} {item.phone}
                </div>
            }
        </div>
    );
};