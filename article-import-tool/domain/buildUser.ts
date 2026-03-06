import { randomUUID } from "crypto"
import { ADMIN_CREATE_ID, LANGUAGE_ID, MERCHANT_ID } from "../variable"
import slugify from "../utils/slugify"
import formatDate from "../utils/formatDate"

export interface UserInput {
    Name: string
    Email: string
    Password: string
    SubDescription?: string
    Description?: string
    AllType?: number
    ImagesLink?: string[]
}
export default function buildUser(item: UserInput) {

    return {
        Id: randomUUID(),
        Name: item.Name,
        Email: item.Email,
        Password: item.Password,
        AllType: item.AllType ?? 0,
        Images: []
    }
}