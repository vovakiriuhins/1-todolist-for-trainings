import React from 'react';

type SuperButtonPropsType = {
    callBack:()=>void
}

export const SuperButton = (props:SuperButtonPropsType) => {

    const onclickHandler = () => {
      props.callBack()
    }

    return (
        <button onClick={onclickHandler}>+</button>
    );
};
