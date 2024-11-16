'use server'

import { clerkClient } from "@clerk/nextjs/server"

export const getClerkUsers = async({userIds}:{userIds: string[]})=>{
    try {
        const {data} = await clerkClient.users.getUserList({
            emailAddress: userIds,
        })

        const users = data.

    } catch (error) {
        console.log("Could not get clerkusers", error)
    }
}