import css from './Contact.module.css'

export default function Contact({ contact: { name, number, id }, onDelete }) {
    return (
        <>
            <div>
                <div className={css.contactData}>
                    <p>{name}</p>
                </div>
                <div className={css.contactData}>
                    <p>{number}</p>
                </div>
            </div>
            <button className={css.btn} type='button' onClick={()=>onDelete(id)}>Delete</button>
        </>
    )
}