import {DELETE_RAW_USER_CHILDREN, UPDATE_RAW_USER_CHILDREN, UPDATE_RAW_USER_DATA} from "./action";

const userData = {
    name: '',
    surname: '',
    patronymic: '',
    age: '',
    children : []
};

const rawReducer = (state = JSON.parse(localStorage.getItem('userData')) || userData, action) => {
    switch (action.type) {
        case UPDATE_RAW_USER_DATA : {
            const {nameData, value} = action.payload;
            return {
                ...state,
                [nameData]: value,

            }
        }
        case UPDATE_RAW_USER_CHILDREN : {
            const {nameChildren, ageChildren, id} = action.payload;
            const newArray = state.children.slice().concat({id,nameChildren,ageChildren});
            return {
                ...state,
                children : newArray
            }
        }
        case DELETE_RAW_USER_CHILDREN : {
            const {id} = action.payload;
            const newArray = state.children.slice().filter((item) => item.id !== id);
            return {
                ...state,
                children : newArray
            }
        }
        default:
            return state;
    }
}

export default rawReducer;