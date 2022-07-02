import React from 'react';
import StyledSelect from "../atoms/StyledSelect";
import {Modal} from "antd";
import {useFormContext} from "react-hook-form";

const SelectModal = ({ visible, onSubmit, onCancel }) => {
    const { control } = useFormContext();

    return (
        <Modal title="Basic Modal"
               visible={visible}
               onOk={onSubmit}
               onCancel={onCancel}
        >
            <StyledSelect
                control={control}
                name='hobby'
                placeholder='국가를 선택하세요'
                options={[
                    {label: '한국', value: 'korea'},
                    {label: '미국', value: 'usa'},
                    {label: '일본', value: 'japan'},
                ]}
                style={{display: 'block'}}
            />
        </Modal>
    );
};

export default SelectModal;