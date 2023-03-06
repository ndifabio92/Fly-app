import React from 'react'
import { Button } from '@mui/material'
import { theme } from './styles/index'

export const ButtonPrimary = ({ variant, type, title }) => {
    return (
        <Button sx={theme.primaryButton} variant={variant} type={type}>
            {title}
        </Button>
    )
}
