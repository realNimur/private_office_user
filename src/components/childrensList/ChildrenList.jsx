import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ChildrenItem from "../childrenItem/ChildrenItem";
import {UPDATE_RAW_USER_CHILDREN} from "../../redux/action";
import './childrenList.scss';

const ChildrenList = () => {
    const dispatch = useDispatch();
    const stateRedux = useSelector(state => state);
    const childrenList = stateRedux.children;
    const [showAddChildrenInput, setShowAddChildrenInput] = useState(false);
    const [newChildrenData, setNewChildrenData] = useState({
        children_name: '',
        children_age: '',
    });
    const handleChange = (e) => {
        setNewChildrenData({
            ...newChildrenData,
            [e.target.name]: e.target.value
        });
    }
    const toggleShowAddChildrenInput = () => {
        setShowAddChildrenInput(!showAddChildrenInput);
    }
    const saveLocalStorage = () => {
        localStorage.setItem('userData', JSON.stringify(stateRedux));
    }

    return (
        <div className={"children-list"}>
            <header className="children-list__header">
                <p>Дети(макс. 5)</p>
                {childrenList.length < 5 &&
                <button type={"button"} className={"children-list__add-children-btn"}
                        onClick={toggleShowAddChildrenInput}><span>+</span> Добавить ребенка</button>
                }
            </header>
            <div className="children-list__body">
                {childrenList.length < 5 && showAddChildrenInput && (<div className={"children-list__add-inputs"}>
                    <fieldset>
                        <label htmlFor="add_input_name">имя</label>
                        <input type="text" name={"children_name"} id={"add_input_name"}
                               value={newChildrenData.children_name}
                               onChange={(e) => handleChange(e)}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="add_input_age">возраст</label>
                        <input type="number" name={"children_age"} id={"add_input_age"}
                               value={newChildrenData.children_age}
                               onChange={(e) => handleChange(e)}/>
                    </fieldset>
                    <button type={"button"} onClick={() => {
                        dispatch({
                            type: UPDATE_RAW_USER_CHILDREN,
                            payload: {
                                id: childrenList.length + 1,
                                nameChildren: newChildrenData.children_name,
                                ageChildren: newChildrenData.children_age
                            }
                        })
                    }}>Сохранить
                    </button>
                </div>)}
                {
                    childrenList.length > 0 && childrenList.map((children, index) =>
                        (<ChildrenItem key={index}
                                       name={children.nameChildren}
                                       age={children.ageChildren}
                                       id={children.id}/>))
                }
            </div>
            <footer className="children-list__footer">
                <button type={"button"} onClick={saveLocalStorage}>Сохранить</button>
            </footer>
        </div>
    );
};

export default ChildrenList;