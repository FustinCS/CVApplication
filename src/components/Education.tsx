import { useState } from "react";
import '../styles/Education.css'

export function Education() {
    const [school, setSchool] = useState<string>("");
    const [study, setStudy] = useState<string>("");
    const [date, setDate] = useState<string>("");

    function handleSchoolChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSchool(e.target.value);
    }

    function handleStudyChange(e: React.ChangeEvent<HTMLInputElement>) {
        setStudy(e.target.value);
    }

    function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
        setDate(e.target.value);
    }

    return (
        <div>
            <h1>Education</h1>
            <div className='general-info-container'>
                <div className='input-container'>
                    <label>Name: </label>
                    <input type='text' value={school} onChange={handleSchoolChange}/>
                </div>
                <div className='input-container'>
                    <label>Email: </label>
                    <input type='text' value={study} onChange={handleStudyChange}/>
                </div>
                <div className='input-container'>
                    <label>Phone: </label>
                    <input type='date' value={date} onChange={handleDateChange}/>
                </div>
            </div>
        </div>
    )
}