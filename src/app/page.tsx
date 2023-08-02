'use client'

import {useState} from "react";
import FormElement from './FormElement';

export default function Home() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [adres, setAdres] = useState("");

    console.log(name, companyName, adres);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <main >
            <FormElement myLabel='ad-soyad' inputHandler={setName}/>
            <FormElement myLabel='şirket adı' inputHandler={setCompanyName}/>
            <FormElement myLabel="adres" inputHandler={setAdres}/>
            <h2>{count}</h2>
            <button onClick={handleClick}>Merhaba</button>
        </main>
    )
}