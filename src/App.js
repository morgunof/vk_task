import {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import Header from "./components/Header";
import ReactDatePicker, { registerLocale } from "react-datepicker"
import ru from 'date-fns/locale/ru'
import React from "react";
import "react-datepicker/dist/react-datepicker.css";


registerLocale('ru', ru)


export function App() {
    const {register, handleSubmit, control, reset} = useForm();
    const [data, setData] = useState("");

    const onSubmit = (data) => {
        const updateData = {
            ...data,
            date: data.date.toString()
        }
        console.log(JSON.stringify(updateData));
    }

    const onReset = () => {
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Header/>
            <input {...register("firstName")} placeholder="Ваше имя"/>
            <select {...register("tower", {required: true})}>
                <option value="">Выбрать башню</option>
                <option value="A">Tower A</option>
                <option value="B">Tower B</option>
            </select>
            <select {...register("floor", {required: true})}>
                <option value="">Выбрать этаж</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
            </select>
            <select {...register("room", {required: true})}>
                <option value="">Выбрать переговорку</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>


            <section>
                <Controller
                    control={control}
                    name="date"
                    render={({field}) => (
                        <ReactDatePicker {...register("date", {required: true})}
                                         className="input"
                                         placeholderText="Выберите дату"
                                         onChange={(data) => field.onChange(data)}
                                         selected={field.value}
                                         locale='ru'

                        />
                    )}
                />
            </section>

            <textarea {...register("info")} placeholder="Введите комментарий"/>
            <p>{data}</p>
            <button type="submit" className='button'> ОТПРАВИТЬ</button>
            <button onClick={onReset}> ОЧИСТИТЬ</button>
        </form>
    );
}

