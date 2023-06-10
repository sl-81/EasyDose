// collects information of the patient
import { ChangeEvent } from 'react';


interface InfoFormProps {
    placeholdertext: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function InfoForm({placeholdertext, value, onChange}: InfoFormProps) {
    return (
        <form>
            <input type='text' value ={value} placeholder={placeholdertext} onChange={onChange}/>
        </form>
    )
}

export default InfoForm;