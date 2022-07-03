import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/Stores";

const Count = () => {
    const { count } = useStore();

    return (
        <div>
            <h1>증가 : {count.number}</h1>
            <h2>더블 : {count.double}</h2>
            <button onClick={count.increase}>2씩 증가</button>
            <button onClick={count.decrease}>1씩 감소</button>
        </div>
    );
};

export default observer(Count);