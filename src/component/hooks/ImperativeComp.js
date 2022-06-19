import React, {useRef, forwardRef, useImperativeHandle, useState} from 'react';

const _Cart = forwardRef(({onClick}, ref) => {
    const [modalVisible, setModalVisible] = useState(false)

    useImperativeHandle(ref, () => ({
        getValue: () => {
            console.log('getValue');
            return 'Inkweon Kim';
        },

        getArgValue: (str) => {
            console.log('getArgValue');
            return str;
        },

        closeProfileModal: () => {
            console.log('closeProfileModal');
            setModalVisible(false);
        },
    }))

    return (
        <div>
            <button onClick={onClick}>Click</button>
        </div>
    );
});

const ImperativeComp = () => {
    const ref = useRef();
    const onClick = () => {
        // console.log(ref.current.getValue());
        console.log(ref.current.getArgValue('Nice to meet you'));

        // ref.current.closeProfileModal();
    }

    return (
        <_Cart
            ref={ref}
            onClick={onClick}
        />
    );
};

export default ImperativeComp;