import React from "react";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const { TextArea } = Input;

const StyledTextArea = ({
                            name, placeholder, disabled, style,
                        }) => {

    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({field}) => (
                <TextArea
                    {...field}
                    placeholder={placeholder}
                    disabled={disabled}
                    style={style}
                />
            )}
        />
    );
};

export default StyledTextArea;