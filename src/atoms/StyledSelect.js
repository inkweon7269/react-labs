import React from 'react';
import {Select} from "antd";
import {Controller} from "react-hook-form";

const StyledSelect = ({
                          control, name, placeholder, disabled, style, options, onChange
                      }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({field}) => (
                <Select
                    {...field}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={(e) => {
                        if (onChange) {
                            onChange(e);
                        }
                        field.onChange(e);
                    }}
                    style={style}
                >
                    {options?.map((item, key) => (
                        <Select.Option key={key} value={item.value} disabled={item.disabled}>
                            {item.label}
                        </Select.Option>
                    ))}
                </Select>
            )}
        />
    );
};

export default StyledSelect;