import React from 'react';
import StyledInput from "../atoms/StyledInput";
import StyledSelect from "../atoms/StyledSelect";
import {Button, Col, Form, Layout, Row, Typography} from "antd";
import {useFormContext} from "react-hook-form";
import StyledCheckbox from "../atoms/StyledCheckbox";
import StyledRadio from "../atoms/StyledRadio";

const {Content} = Layout;
const {Paragraph, Text, Title} = Typography;

const JoinTemp = ({onSubmit, onChangeAll, onChangeChecks, onChangeRadio}) => {
    const {control} = useFormContext();

    return (
        <Form
            layout='vertical'
            onFinish={onSubmit}
        >
            <Row>
                <Col span={12} offset={6}>
                    <Content>
                        <StyledInput
                            control={control}
                            name='name'
                            placeholder='이름을 입력하세요.'
                        />

                        <StyledSelect
                            control={control}
                            name='gender'
                            placeholder='성별을 입력하세요.'
                            options={[
                                {label: '남자', value: 'man'},
                                {label: '여자', value: 'women'},
                            ]}
                            style={{display: 'block'}}
                        />

                        <div>
                            <Title level={5}>단일 체크 박스</Title>
                            <StyledCheckbox
                                control={control}
                                name='chk1'
                            >
                                <Paragraph>단일 체크박스 테스트</Paragraph>
                            </StyledCheckbox>
                        </div>

                        <div>
                            <Title level={5}>복수의 체크박스</Title>
                            <StyledCheckbox
                                control={control}
                                name='all'
                                onChange={onChangeAll}
                            >
                                <Paragraph>전체</Paragraph>
                            </StyledCheckbox>

                            <StyledCheckbox
                                control={control}
                                name='lang'
                                options={[
                                    {label: '자바스크립트', value: 'javascript'},
                                    {label: '자바', value: 'java',},
                                    {label: '파이썬', value: 'python'}
                                ]}
                                onChange={onChangeChecks}
                            />
                        </div>

                        <div>
                            <Title level={5}>단일 라디오</Title>
                            <StyledRadio
                                control={control}
                                name='radio1'
                            >
                                <Paragraph>단일 라디오 테스트</Paragraph>
                            </StyledRadio>
                        </div>

                        <div>
                            <Title level={5}>복수의 라디오</Title>
                            <StyledRadio
                                control={control}
                                name='hobby'
                                options={[
                                    {label: '축구', value: 'soccer'},
                                    {label: '농구', value: 'basket',},
                                    {label: '테니스', value: 'tennis'}
                                ]}
                                onChange={onChangeRadio}
                            />
                        </div>

                        <Button type='primary' htmlType='submit' block>제출</Button>
                    </Content>
                </Col>
            </Row>
        </Form>
    );
};

export default JoinTemp;