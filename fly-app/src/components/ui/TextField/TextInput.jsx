import React from 'react'
import { TextField } from '@mui/material'

export const TextInput = ({ name, label, value, onChange, error, helperText }) => {
    return (
        <TextField
            style={{ width: "200px" }}
            id={name}
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
        />
    )
}
