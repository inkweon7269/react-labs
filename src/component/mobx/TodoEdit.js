import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/Stores";
import { Button, Form, Input } from "antd";
import dayjs from "dayjs";

const TodoEdit = () => {
    const { todo } = useStore();
    const [form] = Form.useForm();

    const onSubmit = (data) => {
        const { title } = data;

        const result = {
            id: dayjs().format('YYYY-MM-DD HH:mm:ss'),
            title,
            date: dayjs().format('YYYY-MM-DD')
        }

        todo.addTodo(result);
        form.resetFields();
    }

    return (
        <Form
            form={form}
            onFinish={onSubmit}
        >
            <Form.Item
                label="title"
                name="title"
            >
                <Input />
            </Form.Item>

            <Button htmlType='submit'>Add</Button>
        </Form>
    );
};

export default observer(TodoEdit);