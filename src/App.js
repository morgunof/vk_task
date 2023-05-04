import {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import Header from "./components/Header";
import ReactDatePicker from "react-datepicker"
import React from "react";
import "react-datepicker/dist/react-datepicker.css";


export function App() {
    const {register, handleSubmit, control, reset} = useForm();
    const [data, setData] = useState("");

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    };

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
                    render={({ field }) => (
                        <ReactDatePicker {...register("date", {required: true})}
                            className="input"
                            placeholderText="Выберите дату"
                            onChange={(e) => field.onChange(e)}
                            selected={field.value}
                        />
                    )}
                />
            </section>

            <textarea {...register("info")} placeholder="Введите комментарий"/>
            <p>{data}</p>
            <input type="submit"/>
        </form>
    );
}

