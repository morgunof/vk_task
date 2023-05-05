import {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import Header from "./components/Header";
import ReactDatePicker, {registerLocale} from "react-datepicker"
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
import Select, {SelectChangeEvent} from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';


registerLocale('ru', ru)


export function App() {
    const {register, handleSubmit, control, reset} = useForm();
    const [data, setData] = useState("");

    const onSubmit = (data) => {
        const updateData = {
            ...data,
            // date: data.date.toString()
        }
        console.log(JSON.stringify(updateData));
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

                <TextField {...register("firstName")}
                           sx={{display: "flex", flexDirection: 'column', width: 300, marginTop: 2, marginBottom: 2}}
                           id="outlined-textarea"
                           label="Введите ваше имя"
                           multiline
                />
                <FormControl sx={{display: "flex", width: 300}}>
                    <InputLabel id="demo-simple-select-label">Выберите башню</InputLabel>
                    <Select {...register("tower", {required: true})}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            //value={tower}
                            label="Выберите башню"
                        // onChange={handleSubmit}
                            multiline
                    >
                        <MenuItem value='A'>Башня A</MenuItem>
                        <MenuItem value='B'>Башня B</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{display: "flex", width: 300, marginTop: 2}}>
                    <InputLabel id="demo-simple-select-label">Выберите этаж</InputLabel>
                    <Select {...register("floor", {required: true})}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                        //value={age}
                            label="Выберите этаж"
                        // onChange={handleSubmit}
                            multiline
                    >
                        <MenuItem value='3'>Этаж 3</MenuItem>
                        <MenuItem value='4'>Этаж 4</MenuItem>
                        <MenuItem value='5'>Этаж 5</MenuItem>
                        <MenuItem value='6'>Этаж 6</MenuItem>
                        <MenuItem value='7'>Этаж 7</MenuItem>
                        <MenuItem value='8'>Этаж 8</MenuItem>
                        <MenuItem value='9'>Этаж 9</MenuItem>
                        <MenuItem value='10'>Этаж 10</MenuItem>
                        <MenuItem value='11'>Этаж 11</MenuItem>
                        <MenuItem value='12'>Этаж 12</MenuItem>
                        <MenuItem value='13'>Этаж 13</MenuItem>
                        <MenuItem value='14'>Этаж 14</MenuItem>
                        <MenuItem value='15'>Этаж 15</MenuItem>
                        <MenuItem value='16'>Этаж 16</MenuItem>
                        <MenuItem value='17'>Этаж 17</MenuItem>
                        <MenuItem value='18'>Этаж 18</MenuItem>
                        <MenuItem value='19'>Этаж 19</MenuItem>
                        <MenuItem value='20'>Этаж 20</MenuItem>
                        <MenuItem value='21'>Этаж 21</MenuItem>
                        <MenuItem value='22'>Этаж 22</MenuItem>
                        <MenuItem value='23'>Этаж 23</MenuItem>
                        <MenuItem value='24'>Этаж 24</MenuItem>
                        <MenuItem value='25'>Этаж 25</MenuItem>
                        <MenuItem value='26'>Этаж 25</MenuItem>
                        <MenuItem value='27'>Этаж 27</MenuItem>
                    </Select>
                </FormControl>

                {/*<select {...register("tower", {required: true})}>*/}
                {/*    <option value="">Выбрать башню</option>*/}
                {/*    <option value="A">Tower A</option>*/}
                {/*    <option value="B">Tower B</option>*/}
                {/*</select>*/}

                {/*<select {...register("floor", {required: true})}>*/}
                {/*    <option value="">Выбрать этаж</option>*/}
                {/*    <option value="3">3</option>*/}
                {/*    <option value="4">4</option>*/}
                {/*    <option value="5">5</option>*/}
                {/*    <option value="6">6</option>*/}
                {/*    <option value="7">7</option>*/}
                {/*    <option value="8">8</option>*/}
                {/*    <option value="9">9</option>*/}
                {/*    <option value="10">10</option>*/}
                {/*    <option value="11">11</option>*/}
                {/*    <option value="12">12</option>*/}
                {/*    <option value="13">13</option>*/}
                {/*    <option value="14">14</option>*/}
                {/*    <option value="15">15</option>*/}
                {/*    <option value="16">16</option>*/}
                {/*    <option value="17">17</option>*/}
                {/*    <option value="18">18</option>*/}
                {/*    <option value="19">19</option>*/}
                {/*    <option value="20">20</option>*/}
                {/*    <option value="21">21</option>*/}
                {/*    <option value="22">22</option>*/}
                {/*    <option value="23">23</option>*/}
                {/*    <option value="24">24</option>*/}
                {/*    <option value="25">25</option>*/}
                {/*    <option value="26">26</option>*/}
                {/*    <option value="27">27</option>*/}
                {/*</select>*/}

                <FormControl sx={{display: "flex", width: 300, marginTop: 2}}>
                    <InputLabel id="demo-simple-select-label">Выберете комнату</InputLabel>
                    <Select {...register("room", {required: true})}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                        //value={age}
                            label="Выберете комнату"
                        // onChange={handleSubmit}
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
                </FormControl>

                {/*<select {...register("room", {required: true})}>*/}
                {/*    <option value="">Выбрать переговорку</option>*/}
                {/*    <option value="1">1</option>*/}
                {/*    <option value="2">2</option>*/}
                {/*    <option value="3">3</option>*/}
                {/*    <option value="4">4</option>*/}
                {/*    <option value="5">5</option>*/}
                {/*    <option value="6">6</option>*/}
                {/*    <option value="7">7</option>*/}
                {/*    <option value="8">8</option>*/}
                {/*    <option value="9">9</option>*/}
                {/*    <option value="10">10</option>*/}
                {/*</select>*/}

                <section>
                    <Controller
                        control={control}
                        name="date"
                        render={({field}) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    sx={{display: "flex", flexDirection: 'column', width: 300, marginTop: 2}}
                                    data={data}
                                    onChange={(newData) => setData(newData)}/>
                            </LocalizationProvider>
                        )}
                    />
                </section>

                <TextField {...register("info")}
                           sx={{display: "flex", flexDirection: 'column', width: 300, marginTop: 2}}
                           id="outlined-textarea"
                           label="Введите комментарий"
                           multiline
                />

                <Button
                    sx={{display: "flex", flexDirection: 'column', width: 300, marginTop: 1, backgroundColor: '#0077FF'}}
                    type="submit"
                    variant="contained">ОТПРАВИТЬ</Button>

                <Button onClick={onReset}
                        sx={{display: "flex", flexDirection: 'column', width: 300, marginTop: 1}}
                        type="">ОЧИСТИТЬ</Button>

            </Box>
        </MainLayout>
    );
}

