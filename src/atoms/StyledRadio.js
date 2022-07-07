import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Radio } from "antd";

const StyledRadio = ({
                         name, text, style, options, onChange, children,
                     }) => {
    const { control } = useFormContext();

    return (
        <>
            {options ? (
                <Controller
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <Radio.Group
                            {...field}
                            options={options}
                            onChange={(e) => {
                                if (onChange) {
                                    onChange(e.target.value);
                                }
                                field.onChange(e);
                            }}
                        />
                    )}
                />
            ) : (
                <Controller
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <Radio
                            {...field}
                            checked={field.value}
                            onChange={(e) => {
                                if (onChange) {
                                    onChange(e.target.checked);
                                }
                                field.onChange(e.target.checked);
                            }}
                        >
                            {children}
                        </Radio>
                    )}
                />
            )}
        </>
    );
};

export default StyledRadio;