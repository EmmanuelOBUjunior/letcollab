'use server'

import { clerkClient } from "@clerk/nextjs/server"


export const getClerkUsers = async({userIds}:{userIds: string[]})=>{
    try {
        const {data} = await (await clerkClient()).users.getUserList()

        const users = data.map((user)=>({
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.emailAddresses[0].emailAddress,
            avatar: user.imageUrl
        }))

    } catch (error) {
        console.log("Could not get users", error)
    }
}