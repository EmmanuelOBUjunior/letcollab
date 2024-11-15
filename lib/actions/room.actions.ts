import {nanoid} from 'nanoid'

export const createDocument = ({userId, email}) =>{
    const roomId = nanoid()

    try{

    }catch(error){
        console.log("Error happened while creating a room: ", error)
    }
}