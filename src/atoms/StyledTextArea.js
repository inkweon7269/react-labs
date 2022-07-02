import React from "react";
import { Input } from "antd";
import { Controller } from "react-hook-form";

const { TextArea } = Input;

const StyledTextArea = ({
                            control, name, placeholder, disabled, style,
                        }) => {
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