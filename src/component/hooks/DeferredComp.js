import React, {useState, useDeferredValue, useMemo} from 'react';

const DeferredComp = () => {
    /*
        input을 입력할 때마다 boxes 배경색상이 변경되지만 그 수가 10,000개이기 때문에 연산 시간이 걸린다.
        이로 인해 브라우저 렉이 발생하게 되는데 이는 렌더링 성능 저하를 유발한다.
        React 문서에서 이 현상을 '렌더링 차단(blocking)'이라 부른다.

        기존에는 이러한 상황에서 debounce/throttle 기법을 이용했지만 이는 완벽한 UX를 보장하지 않는다.
        debounce delay가 500ms이면 유저의 의사와 상관없이 500ms를 기다려야한다.

        이러한 상황을 해결하기 위해 나온 것이 React 18의 Concurrent Mode이다.
        useDeferredValue을 이용하면 deferredValue의 값을 지연시킬 수 있다.

        input에 있는 value는 빠르게 변하지만 deferredValue의 값을 바로 변경되지 않는다.
        deferredValue에 의존하는 boxes 연산은 value보다 우선 순위가 높지 않기 떄문에 value 값을 먼저 업데이트하고 deferredValue 값은 지연하기 때문이다.
        즉, deferredValue에 의해 boxes 연산이 진행되는 와중에 value가 업데이트된다면 boxes 렌더링을 interrupt하고 value를 먼저 렌더링할 수 있다.

        이제 input tag의 value는 즉각적으로 변하지만, deferredValue와 boxes는 그보다 낮은 빈도수로 업데이트되는 것을 확인할 수 있다.
        이로인해 렌더링 차단은 발생하지 않는다.
     */
    const [value, setValue] = useState('');
    const deferredValue = useDeferredValue(value);

    const boxes = useMemo(() => {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {new Array(10000).fill(null).map(() => {
                    const x = Math.floor(Math.random() * 256);
                    const y = Math.floor(Math.random() * 256);
                    const z = Math.floor(Math.random() * 256);
                    const backgroundColor = 'rgb(' + x + ',' + y + ',' + z + ')';
                    return <div style={{width: 100, height: 100, backgroundColor}}/>;
                })}
            </div>
        );
    }, [deferredValue]);

    return (
        <div>
            <input onChange={(e) => setValue(e.target.value)} style={{height: 100}}/>
            {boxes}
        </div>
    );
};

export default DeferredComp;