import {Buffer} from "buffer";

declare type SUN = string | null | undefined
declare type DS = Buffer | string
declare type error = Error

declare interface queryObj {
    [key: string]: string
}
