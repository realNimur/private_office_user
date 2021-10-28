import React from 'react';
import {useDispatch} from "react-redux";
import {DELETE_RAW_USER_CHILDREN} from "../../redux/action";
import './childrenItem.scss';

const ChildrenItem = ({name,age,id}) => {
    const dispatch = useDispatch();

    const deleteChildren = (id) => {
        dispatch({type: DELETE_RAW_USER_CHILDREN, payload: {id}})
    }
    return (
        <div className="children-item">
            <fieldset>
                <label htmlFor={"name_children"}>Имя</label>
                <input type="text" id={"name_children"} readOnly={true} name={"name_children"}  value={name}/>
            </fieldset>
            <fieldset>
                <label htmlFor={"age_children"}>Возраст</label>
                <input type="number" id={"age_children"} readOnly={true}  name={"age_children"}  value={age}/>
            </fieldset>
            <button type={"button"} onClick={()=>deleteChildren(id)}>Удалить</button>
        </div>
    );
};

export default ChildrenItem;