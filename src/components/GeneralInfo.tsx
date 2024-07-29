import { GeneralInformation } from './CVFormTypes'
import '../styles/GeneralInfo.css'

interface GeneralInfoProps {
    generalInfo: GeneralInformation;
    setGeneralInfo: React.Dispatch<React.SetStateAction<GeneralInformation>>;
}


export function GeneralInfo({ generalInfo, setGeneralInfo }: GeneralInfoProps) {
    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setGeneralInfo({...generalInfo, name: e.target.value});
    }

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setGeneralInfo({...generalInfo, email: e.target.value});
    }

    function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
        setGeneralInfo({...generalInfo, phone: e.target.value});
    }

    return (
        <div>
            <h1>General Information</h1>
            <div className='general-info-container'>
                <div className='input-container'>
                    <label>Name: </label>
                    <input type='text' value={generalInfo.name} onChange={handleNameChange}/>
                </div>
                <div className='input-container'>
                    <label>Email: </label>
                    <input type='text' value={generalInfo.email} onChange={handleEmailChange}/>
                </div>
                <div className='input-container'>
                    <label>Phone: </label>
                    <input type='text' value={generalInfo.phone} onChange={handlePhoneChange}/>
                </div>
            </div>
        </div>
    )
}