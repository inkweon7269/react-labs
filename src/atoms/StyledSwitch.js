import { Controller, useFormContext } from "react-hook-form";
import { Switch } from "antd";

const StyledSwitch = ({
                          name,
                          chkLabel,
                          unChkLabel,
                      }) => {

    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <Switch
                    {...field}
                    checkedChildren={chkLabel}
                    unCheckedChildren={unChkLabel}
                    checked={field.value}
                />
            )}
        />
    );
};

export default StyledSwitch;