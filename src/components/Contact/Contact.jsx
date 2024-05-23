import css from './Contact.module.css'
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ contact: { name, number, id }, onDelete }) {
    return (
        <div className={css.contactItem}>
            <div>
                <div className={css.contactData}>
                    <FaUser />
                    <p>{name}</p>
                </div>
                <div className={css.contactData}>
                    <BsFillTelephoneFill />
                    <p>{number}</p>
                </div>
            </div>
            <button className={css.btn} type='button' onClick={()=>onDelete(id)}>Delete</button>
        </div>
    )
}