import {nanoid} from 'nanoid'

export const createDocument = ({userId, email}: CreateDocumentParams) =>{
    const roomId = nanoid()

    try{
        const metadata = {
            creatorId: userId,
            email,
            title: 'Untitled'
        }

    }catch(error){
        console.log("Error happened while creating a room: ", error)
    }
}