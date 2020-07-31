import React from "react"

export default ({ label, type, name, value, onChange }) => {
    let input = <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
    />
    if (type === 'textarea') {
        input = <textarea
            name={name}
            value={value}
            onChange={onChange}
        />
    }
    return (
        <div>
            <label>
                {label}:
                {input}
            </label>
        </div>
    )
}