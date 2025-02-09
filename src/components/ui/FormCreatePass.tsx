import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <Grid container spacing={2}>
                <Grid item>
                    <TextField id="outlined-basic" label="Имя пароля" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Пароль" variant="outlined" />
                </Grid>
                <Grid item>
                    <Button variant="contained" disableElevation >
                        Создать
                    </Button>
                </Grid>
            </Grid>



        </Box>
    );
}
