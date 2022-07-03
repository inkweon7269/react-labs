import React from "react";
import { Button, Typography } from "antd";
import { toJS } from "mobx";

const { Title, Text, Paragraph } = Typography;

const TodoItem = ({ item, onSelectedTodo, onUpdateTodo, onDeleteTodo }) => {
    return (
        <li>
            <Title level={5}>{item.title}</Title>
            <Paragraph>{item.date}</Paragraph>
            <Button
                htmlType="button"
                type="primary"
                onClick={() => onSelectedTodo(item)}
            >
                선택
            </Button>
            <Button
                htmlType="button"
                type="primary"
                onClick={() => onUpdateTodo(item)}
            >
                업데이트
            </Button>
            <Button
                htmlType="button"
                type="primary"
                danger
                onClick={onDeleteTodo}
            >
                삭제
            </Button>
        </li>
    );
};

export default TodoItem;