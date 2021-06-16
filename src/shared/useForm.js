import React,{useState} from 'react'
import Joi from 'joi-browser'


export default function useForm({initialValue,schema,doSubmit}){
const [data,setData] = useState(initialValue)
const [errors,setErros] = useState({})

const validation = ()=>{
    const newErrors = {}
    // const options = {abortEarly:false}
    const {error} = Joi.validate(data,schema)
    if(!error)
        return null
    const val = error.details
    val.forEach(e=>
        newErrors[e.path[0]] = e.message 
        )

    return newErrors
}
// const validateProperty = ({name,value}) =>{
//     const obj = {[name]:value}
//     const sch = {[name]:schema[name]}
//     const {error} = Joi.validate(obj,sch)
//     return error ? error.details[0].message : null
// }
const changeHandler = ({target}) =>{
    const newData = {...data}
    // const newError = {...errors}
    // const errorMessage = validateProperty(target)
    // if(errorMessage){
    //     newError[target.name]=errorMessage
    // }else{
    //     delete newError[target.name]
    // }

    newData[target.name] = target.value
    setData(newData)
    // setErros(newError)
}

const submitHandler = (e)=>{
    e.preventDefault()
    const error = validation()
    setErros(error || {})
    if(error)
        return null

    doSubmit()
    
}

return {
    data,
    submitHandler,
    changeHandler,
    errors
}

}
