'use server'

import { clerkClient } from "@clerk/nextjs/server"
import { parseStringify } from "../utils"
import { liveblocks } from "../liveblocks"


export const getClerkUsers = async({userIds}:{userIds: string[]})=>{
    try {
        const {data} = await (await clerkClient()).users.getUserList()

        const users = data.map((user)=>({
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.emailAddresses[0].emailAddress,
            avatar: user.imageUrl
        }))
        const sortedUsers = userIds.map((email)=> users.find((user)=>user.email === email))

        return parseStringify(sortedUsers)

    } catch (error) {
        console.log("Could not get users", error)
    }
}


export const getDocumentUsers = async({roomId, currentUser, text}:{roomId:string, currentUser:string, text:string})=>{
    try{
        const room = await liveblocks.getRoom(roomId)

        const users = Object.keys(room.usersAccesses).filter((email) => email !== currentUser)

    }catch(error){
        console.log("Error fetching document users: ", error)
    }
}