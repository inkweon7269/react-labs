import { Controller } from "react-hook-form";
import { Switch } from "antd";

const StyledSwitch = ({
                          control,
                          name,
                          chkLabel,
                          unChkLabel,
                      }) => {
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