import React from 'react';

const PreviewChildrenItem = ({name, age}) => {
    return (
        <div style={{
            fontWeight: 'bold',
            padding: '10px 20px',
            display: 'inline-block',
            backgroundColor: '#F1F1F1',
            marginBottom: '10px'
        }}>
            {name} , {age}
        </div>
    );
};

export default PreviewChildrenItem;