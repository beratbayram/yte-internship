import "./FormElement.css"
import {ChangeEvent, Dispatch, SetStateAction} from "react";

interface PropsType {
    myLabel?: string,
    inputHandler: Dispatch<string>
}

export default function FormElement({myLabel = "deneme", inputHandler}: PropsType){

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        inputHandler(event.target.value);
    }

    return(
        <div>
            <span className="form-label">{myLabel}</span>
            <input type='text' onChange={onChangeHandler}/>
        </div>
    )
}