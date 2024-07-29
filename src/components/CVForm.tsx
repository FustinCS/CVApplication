import { useState } from 'react'
import { GeneralInfo } from './GeneralInfo'
import { Education } from './Education'
import { GeneralInformation, EducationInformation } from './CVFormTypes'
import '../styles/CVForm.css'

export function CVForm() {
    const [generalInfo, setGeneralInfo] = useState<GeneralInformation>({name: '', email: '', phone: ''});
    const [educationInfo, setEducationInfo] = useState<EducationInformation>({school: '', study: '', date: ''});
    const [submitted, setSubmitted] = useState<boolean>(false);

    function areAllFieldsFilled(obj: GeneralInformation | EducationInformation): boolean {
        return Object.values(obj).every(value => value.trim() !== '');
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(areAllFieldsFilled(generalInfo) && areAllFieldsFilled(educationInfo)) {
            setSubmitted(true);  
        }
        else {
            alert("Please fill out all fields.");
        }
    }

    function handleEdit() {
        setGeneralInfo({name: '', email: '', phone: ''});
        setEducationInfo({school: '', study: '', date: ''});
        setSubmitted(false);
    }

    if (submitted) {
        return (
            <>
                <h1>General Information</h1>
                <div>
                    <p>Name: {generalInfo.name}</p>
                    <p>Email: {generalInfo.email}</p>
                    <p>Phone: {generalInfo.phone}</p>
                </div>
                <h1>Education</h1>
                <div>
                    <p>School: {educationInfo.school}</p>
                    <p>Type of Study: {educationInfo.study}</p>
                    <p>Date: {educationInfo.date}</p>
                </div>
                <button onClick={handleEdit}>Edit</button>
            </>
        )
    }



    return (
        <form onSubmit={handleSubmit}>
            <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}/>
            <Education educationInfo={educationInfo} setEducationInfo={setEducationInfo}/>
            <button disabled={submitted} type="submit">Submit</button>
        </form>
    )
}