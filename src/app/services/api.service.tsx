import {IUser} from "@/app/models/IUser";

export const GetAllUsers = async ():Promise<IUser[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
}
