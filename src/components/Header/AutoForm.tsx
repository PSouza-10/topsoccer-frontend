import React from 'react'
import { Input,InputGroup,Label,Button,InputProps } from 'reactstrap'


interface FormProps {
    inputs : Array<InputProps>,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void,
    color : string
  
}

const AutoForm : React.FC<FormProps> = ({inputs,onChange,color} ) =>  {
    return (
        
        <>
            {
                inputs.map(({name,type},index) => (
                    <InputGroup key={index}>
                        <Label for={name}>{name}</Label>
                        <Input name={name} type={type} onChange={onChange}/>
                    </InputGroup>
                ))
            }
             <Button color={color}>Enviar</Button>
        </>
       
    )
}

export default AutoForm