import React from 'react';

export type SuperButtonPropsType = {
    name: string
    callBack:()=>void
}

export const SuperButton = (props: SuperButtonPropsType) => {

    const onclickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onclickHandler}>{props.name}</button>
        </div>
    );
};
