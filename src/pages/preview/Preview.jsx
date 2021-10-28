import React from 'react';
import PreviewChildrenItem from "../../components/previewChildrenItem/PreviewChildrenItem";
import './preview.scss';

const Preview = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return (
        <div className={"preview"}>
            {userData ? (
                <>
                    <p>Персональные данные</p>
                    <p style={{fontWeight: 'bold'}}>{userData.surname} {userData.name} {userData.patronymic}{userData.age && (<span> , {userData.age} лет</span>)} </p>
                    {userData.children.length > 0 && (
                        <>
                            <p>Дети</p>
                            <div className="preview__children-list">
                                {userData.children.map((item) =>
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