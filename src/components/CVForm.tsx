import { useState } from 'react'
import { GeneralInfo } from './GeneralInfo'
import { Education } from './Education'
import '../styles/CVForm.css'

export function CVForm() {
    const [submitted, setSubmitted] = useState<boolean>(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        

        setSubmitted(true);
        
    }



    return (
        <form onSubmit={handleSubmit}>
            <GeneralInfo />
            <Education />
            <button disabled={submitted} type="submit">Submit</button>
        </form>
    )
}