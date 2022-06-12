import React, {useEffect, useState} from 'react';
import usePrevious from "../../hooks/usePrevious";

const PrevComp = () => {
    const [word, setWorld] = useState('A');
    const prevWord = usePrevious(word);
    useEffect(() => {
        console.log('Current', word);
        console.log('Previous', prevWord);
    }, [word])

    return (
        <div>
            <button onClick={() => setWorld('B')}>B 클릭</button>
            <button onClick={() => setWorld('C')}>C 클릭</button>
        </div>
    );
};

export default PrevComp;