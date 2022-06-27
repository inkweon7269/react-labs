import React, {createContext, useContext, useState} from 'react';
import Accordion from "./Accordion";
import {Switch} from "antd";

const ToggleContext = createContext();
ToggleContext.displayName = 'ToggleContext';

const useToggle = () => {
    const context = useContext(ToggleContext);
    if (context === undefined) {
        throw new Error('useToggle must be used within a <Toggle />');
    }

    return context;
}

const Toggle = ({children}) => {
    const [on, setOn] = useState(false);
    const toggle = () => setOn(!on);

    return (
        <ToggleContext.Provider value={{on, toggle}}>
            {children}
        </ToggleContext.Provider>
    );
};

Toggle.On = function ToggleOn({children}) {
    const { on } = useToggle();
    return on ? <>{children}</> : null;
}

Toggle.Off = function ToggleOff({children}) {
    const { on } = useToggle();
    return on ? null : <>{children}</>;
}

Toggle.Button = function ToggleButton({ ...restProps }) {
    const { on, toggle } = useToggle();
    return <Switch on={on} onClick={toggle} {...restProps} />
}

export default Toggle;