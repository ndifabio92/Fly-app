import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const SelectPrimary = ({ title, name, items, value, onChange, valueItem }) => {
    return (
        <FormControl style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            <Select
                id={name}
                name={name}
                label={title}
                value={value}
                onChange={onChange}
            >
                {
                    (valueItem === "destination") && <MenuItem key="ALL" value="ALL">Todos los destinos</MenuItem>
                }
                {
                    items?.map(item =>
                        <MenuItem key={item._id} value={item[valueItem]}>
                            {item[valueItem]}
                        </MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}
