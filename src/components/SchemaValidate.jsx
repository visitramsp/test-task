import * as Yup from 'yup'




export const SchemaValidate = Yup.object({
    name: Yup.string().min(2).max(25).required("Name must be at least 2 charactor"),
    birth: Yup.date().required("Please Enter Your Age"),
    sex: Yup.string().required("Please Enter Your sex"),
    mobile: Yup.string()
        
})