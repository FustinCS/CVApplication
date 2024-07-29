import { useState } from "react"
import '../styles/GeneralInfo.css'


export function GeneralInfo() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }

    function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPhone(e.target.value);
    }

    return (
        <div>
            <h1>General Information</h1>
            <div className='general-info-container'>
                <div className='input-container'>
                    <label>Name: </label>
                    <input type='text' value={name} onChange={handleNameChange}/>
                </div>
                <div className='input-container'>
                    <label>Email: </label>
                    <input type='text' value={email} onChange={handleEmailChange}/>
                </div>
                <div className='input-container'>
                    <label>Phone: </label>
                    <input type='text' value={phone} onChange={handlePhoneChange}/>
                </div>
            </div>
        </div>
    )
}