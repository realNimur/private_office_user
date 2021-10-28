import React from 'react';
import PreviewChildrenItem from "../../components/previewChildrenItem/PreviewChildrenItem";
import './preview.scss';

const Preview = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const {name, surname, age, patronymic, children} = userData;
    return (
        <div className={""}>
            {userData ? (
                <>
                    <p>Персональные данные</p>
                    <p style={{fontWeight: 'bold'}}>{surname} {name} {patronymic} , {age} лет</p>
                    {children.length > 0 && (
                        <>
                            <p>Дети</p>
                            <div className="preview__children-list">
                                {children.map((item) =>
                                    <PreviewChildrenItem key={item.id} name={item.nameChildren} age={item.ageChildren}/>
                                )}
                            </div>
                        </>
                    )}
                </>
            ) : ('Нет сохраненного профиля')}
        </div>
    );
};

export default Preview;