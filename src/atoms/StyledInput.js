import React from 'react';
import {Input} from "antd";
import { Controller } from "react-hook-form";

const StyledInput = ({
                         control, name, placeholder, disabled, style
                     }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({field}) => (
                <Input
                    {...field}
                    placeholder={placeholder}
                    disabled={disabled}
                    style={style}
                />
            )}
        />
    );
};

export default StyledInput;