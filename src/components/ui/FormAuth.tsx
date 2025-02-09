import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
export default function BasicTextFields() {
    const [status, setStatus] = useState(false)
    const register = <>
        <Grid container spacing={2}>
            <Grid item>
                <TextField id="outlined-basic" label="Логин" variant="outlined" required />
            </Grid>
            <Grid item>
                <TextField
                    id="outlined-password-input"
                    label="Пароль"
                    type="password"
                    autoComplete="current-password"
                    required
                />
            </Grid>
            <Grid item>
                <TextField
                    id="outlined-password-input"
                    label="Подтверждение пароля"
                    type="password"
                    autoComplete="current-password"
                    required
                />
            </Grid>
            <Grid item>
                <Button variant="contained" disableElevation>
                    Зарегистрироваться
                </Button>
            </Grid>
        </Grid>
    </>
    const login = <>
        <Grid container spacing={2}>
            <Grid item>
                <TextField id="outlined-basic" label="Логин" variant="outlined" required />
            </Grid>
            <Grid item>
                <TextField
                    id="outlined-password-input"
                    label="Пароль"
                    type="password"
                    autoComplete="current-password"
                    required
                />
            </Grid>
            <Grid item>
                <Button variant="contained" disableElevation>
                    Войти
                </Button>
            </Grid>
        </Grid>
    </>
    return (
        <>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch', my: 20, mx: 'auto' } }}
                noValidate
                autoComplete="off"
            >

                {status ? login : register}

            </Box>
            <Button variant="contained" disableElevation onClick={() => { setStatus(!status) }}>
                Поменять
            </Button>
        </>


    );
}
