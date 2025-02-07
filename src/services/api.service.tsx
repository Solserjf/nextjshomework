import {IUser} from "@/models/users/IUser";
import {IPost} from "@/models/posts/IPost";
import {IComment} from "@/models/comments/IComment";


export const GetAllUsers = async ():Promise<IUser[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
}

export const GetOneUser = async (id:string):Promise<IUser> => {
    return await fetch('https://jsonplaceholder.typicode.com/users' + id).then(value => value.json());
}

export const GetAllPosts = async ():Promise<IPost[]> => {
  return  await fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json());
}

export const GetOnePost = async (id:string):Promise<IPost> => {
    return  await fetch('https://jsonplaceholder.typicode.com/posts' + id).then(value => value.json());
}

export const GetAllComments = async ():Promise<IComment[]> => {
   return  await fetch('https://jsonplaceholder.typicode.com/comments').then(value => value.json());
}

export const GetOneComment = async (id:string):Promise<IComment> => {
    return  await fetch('https://jsonplaceholder.typicode.com/comments' + id).then(value => value.json());
}
