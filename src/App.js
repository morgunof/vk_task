import {useForm, Controller} from "react-hook-form";
import Header from "./components/Header";
import {registerLocale} from "react-datepicker"
import ru from 'date-fns/locale/ru'
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import {MainLayout} from "./layouts/MainLayout";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {format} from "date-fns";


registerLocale('ru', ru)

const floorData = Array.from({length: 25}, (_, index) => index + 3)


export function App() {
    const {handleSubmit, control, reset} = useForm({
        defaultValues: {
            firstName: '',
            tower: '',
            floor: '',
            room: '',
            info: '',
            date: null
        }
    });

    const onSubmit = (data) => {

        const newData = {
            ...data,
            date: format(new Date(data.date), 'dd.MM.yyyy')
        }

        console.log(JSON.stringify(newData));
        reset()
    }

    const onReset = () => {
        reset()
    }

    return (
        <MainLayout>
            <Box onSubmit={handleSubmit(onSubmit)}
                 component="form"
                 sx={{display: "flex", flexDirection: 'column', width: 300, marginTop: 1}}
            >
                <Header/>

                <Controller
                    name='firstName'
                    control={control}
                    render={({field: {value, onChange}}) => <TextField value={value} onChange={onChange}
                    label='Введите ваше имя'/>}
                    sx={{display: "flex", flexDirection: 'column', width: 300, marginTop: 2, marginBottom: 2}}/>

                <FormControl sx={{display: "flex", width: 300, marginTop: 2}}>
                    <InputLabel id="demo-simple-select-label">Выберите башню</InputLabel>
                    <Controller
                        name='tower'
                        control={control}
                        render={({field: {value, onChange}}) => (
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={value}
                                label="Выберите башню"
                                onChange={onChange}
                                multiline
                            >
                                <MenuItem value='A'>Башня A</MenuItem>
                                <MenuItem value='B'>Башня B</MenuItem>
                            </Select>
                        )}
                    />
                </FormControl>

                <FormControl sx={{display: "flex", width: 300, marginTop: 2}}>
                    <InputLabel id="demo-simple-select-label">Выберите этаж</InputLabel>
                    <Controller
                        name='floor'
                        control={control}
                        render={({field: {value, onChange}}) => (
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={value}
                                onChange={onChange}
                                label="Выберите этаж"
                                multiline
                            >
                                {
                                    floorData.map(floor => (
                                        <MenuItem value={floor}>Этаж {floor}</MenuItem>
                                    ))
                                }
                            </Select>
                        )}

                    />
                </FormControl>

                <FormControl sx={{display: "flex", width: 300, marginTop: 2}}>
                    <InputLabel id="demo-simple-select-label">Выберете комнату</InputLabel>
                    <Controller
                        control={control}
                        name='room'
                        render={({field: {value, onChange}}) => (
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={value}
                                label="Выберете комнату"
                                onChange={onChange}
                                multiline
                            >
                                <MenuItem value='1'>Комната 1</MenuItem>
                                <MenuItem value='2'>Комната 2</MenuItem>
                                <MenuItem value='3'>Комната 3</MenuItem>
                                <MenuItem value='4'>Комната 4</MenuItem>
                                <MenuItem value='5'>Комната 5</MenuItem>
                                <MenuItem value='6'>Комната 6</MenuItem>
                                <MenuItem value='7'>Комната 7</MenuItem>
                                <MenuItem value='8'>Комната 8</MenuItem>
                                <MenuItem value='9'>Комната 9</MenuItem>
                                <MenuItem value='10'>Комната 10</MenuItem>
                            </Select>
                        )}/>
                </FormControl>

                <Controller
                    control={control}
                    name="date"
                    render={({field: {value, onChange}}) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={{display: "flex", flexDirection: 'column', width: 300, marginTop: 2}}
                                value={value}
                                onChange={(value) => {
                                    onChange(value)
                                }}
                                label='Выберите дату'
                                format='DD/MM/YYYY'/>

                        </LocalizationProvider>
                    )}
                />

                <Controller control={control} name='info' render={({field: {value, onChange}}) => (<TextField
                    sx={{display: "flex", flexDirection: 'column', width: 300, marginTop: 2}}
                    id="outlined-textarea"
                    value={value}
                    onChange={onChange}
                    label="Введите комментарий"
                    multiline
                />)}/>

                <Button
                    type="submit"
                    sx={{
                        display: "flex",
                        flexDirection: 'column',
                        width: 300,
                        marginTop: 1,
                        backgroundColor: '#0077FF'
                    }}
                    variant="contained">ОТПРАВИТЬ</Button>

                <Button onClick={onReset}
                        sx={{display: "flex", flexDirection: 'column', width: 300, marginTop: 1}}>ОЧИСТИТЬ</Button>

            </Box>
        </MainLayout>
    );
}

