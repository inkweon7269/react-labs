import React from "react";
import { Checkbox } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const StyledCheckbox = ({
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
                        <Checkbox.Group
                            {...field}
                            options={options}
                            onChange={(e) => {
                                if (onChange) {
                                    onChange(e);
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
                        <Checkbox
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
                        </Checkbox>
                    )}
                />
            )}
        </>
    );
};

export default StyledCheckbox;