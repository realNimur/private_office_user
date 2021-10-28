import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_RAW_USER_DATA} from "../../redux/action";
import './form.scss';

const Form = () => {
    const dispatch = useDispatch();

    const {name, surname, patronymic, age} = useSelector(state => state);

    const handleChange = (e) => {
        const nameData = e.target.name.slice(0, -5);
        const newValue = e.target.value;
        dispatch({type: UPDATE_RAW_USER_DATA, payload: {nameData, value: newValue}});
    };

    return (
        <form className={"user-data"}>
            <p className={"user-data__caption"}>Персональные данные</p>
            <fieldset>
                <label htmlFor={"name_user"}>Имя</label>
                <input value={name} onChange={(e) => handleChange(e)} type="text" id={"name_user"} name={"name_user"}/>
            </fieldset>
            <fieldset>
                <label htmlFor={"surname_user"}>Фамилия</label>
                <input value={surname} onChange={(e) => handleChange(e)} type="text" id={"surname_user"}
                       name={"surname_user"}/>
            </fieldset>
            <fieldset>
                <label htmlFor={"patronymic_user"}>Отчество</label>
                <input value={patronymic} onChange={(e) => handleChange(e)} type="text" id={"patronymic_user"}
                       name={"patronymic_user"}/>
            </fieldset>
            <fieldset>
                <label htmlFor={"age_user"}>Возраст</label>
                <input value={age} onChange={(e) => handleChange(e)} type="number" id={"age_user"} name={"age_user"}/>
            </fieldset>
        </form>

    )
        ;
};

export default Form;