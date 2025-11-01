import "../styles/Input.css";

export default function Input({ id, placeholder, type, value, onChange, required, name, label }) {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} name={name} />
        </div>
    )
}