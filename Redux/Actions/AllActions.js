
export default function UsersAccounts(data){
    return{
        type:"get-users",
        payload:data
    }
}

export function SingleData(data){
    return{
        type:"single-user",
        payload:data
    }
}



