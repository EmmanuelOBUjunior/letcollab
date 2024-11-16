'use server'

import { clerkClient } from "@clerk/nextjs/server"


export const getClerkUsers = async({userIds}:{userIds: string[]})=>{
    try {
        const {data} = (await clerkClient()).users.getUserList({
            emailAddress: userIds
        })

        const users = data.map((user)=>({
            id: user.id,
            name: `${user.firstName} ${user.lastName}`
        }))

    } catch (error) {
        console.log("Could not get users", error)
    }
}