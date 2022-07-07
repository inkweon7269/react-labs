import React from "react";
import { Input, InputNumber } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";

const StyledInput = ({
                         className,
                         type,
                         name,
                         placeholder,
                         disabled,
                         style,
                         min,
                         max,
                         prefix,
                         suffix,
                         allowClear,
                         block,
                         addonBefore,
                         addonAfter,
                     }) => {

    const { control } = useFormContext();
    const cssStyle = {
        ...style,
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => {
                if (type === "password") {
                    return (
                        <Input.Password
                            {...field}
                            className={className}
                            placeholder={placeholder}
                            maxLength={max}
                            disabled={disabled}
                            prefix={prefix}
                            suffix={suffix}
                            block
                            style={cssStyle}
                        />
                    );
                }

                if (type === "search") {
                    return (
                        <Input.Search
                            {...field}
                            className={className}
                            placeholder={placeholder}
                            prefix={prefix}
                            suffix={suffix}
                            block
                            style={cssStyle}
                        />
                    );
                }

                if (type === "number") {
                    return (
                        <_StyledInputNumber
                            {...field}
                            className={className}
                            min={min}
                            max={max}
                            placeholder={placeholder}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            addonBefore={addonBefore}
                            addonAfter={addonAfter}
                            style={{ width: block ? "100%" : "auto", ...cssStyle }}
                        />
                    );
                }

                return (
                    <Input
                        {...field}
                        className={className}
                        placeholder={placeholder}
                        maxLength={max}
                        disabled={disabled}
                        prefix={prefix}
                        suffix={suffix}
                        allowClear={allowClear}
                        block
                        style={cssStyle}
                    />
                );
            }}
        />
    );
};

export default StyledInput;

const _StyledInputNumber = styled(InputNumber)`
  .ant-input-number-handler-wrap {
    display: none;
  }

  .ant-input-number-group-addon {
    padding: 0;
  }

  &.text-center {
    .ant-input-number-input {
      text-align: center;
    }
  }

  &.text-right {
    .ant-input-number-input {
      text-align: right;
    }
  }
`;