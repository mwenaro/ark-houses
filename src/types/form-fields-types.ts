export type TFormField = {
    label:string, 
    name : string,
    type : string,
    labeled?:boolean
    options?: TSelectOption[]
}

export type TSelectOption = string | {label:string, value:any}