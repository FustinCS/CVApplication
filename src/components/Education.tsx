import { EducationInformation } from './CVFormTypes'
import '../styles/Education.css'

interface EducationInfoProps {
    educationInfo: EducationInformation;
    setEducationInfo: React.Dispatch<React.SetStateAction<EducationInformation>>;
}

export function Education({ educationInfo, setEducationInfo }: EducationInfoProps) {
    function handleSchoolChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEducationInfo({...educationInfo, school: e.target.value});
    }

    function handleStudyChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEducationInfo({...educationInfo, study: e.target.value});
    }

    function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEducationInfo({...educationInfo, date: e.target.value});
    }

    return (
        <div>
            <h1>Education</h1>
            <div className='general-info-container'>
                <div className='input-container'>
                    <label>Name: </label>
                    <input type='text' value={educationInfo.school} onChange={handleSchoolChange}/>
                </div>
                <div className='input-container'>
                    <label>Email: </label>
                    <input type='text' value={educationInfo.study} onChange={handleStudyChange}/>
                </div>
                <div className='input-container'>
                    <label>Phone: </label>
                    <input type='date' value={educationInfo.date} onChange={handleDateChange}/>
                </div>
            </div>
        </div>
    )
}