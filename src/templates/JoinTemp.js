import React from "react";
import StyledInput from "../atoms/StyledInput";
import StyledSelect from "../atoms/StyledSelect";
import { Button, Col, Form, Layout, Row, Typography } from "antd";
import { useFormContext } from "react-hook-form";
import StyledCheckbox from "../atoms/StyledCheckbox";
import StyledRadio from "../atoms/StyledRadio";
import StyledSwitch from "../atoms/StyledSwitch";
import StyledTextArea from "../atoms/StyledTextArea";
import StyledLabel from "../atoms/StyledLabel";
import StyledError from "../atoms/StyledError";

const { Content } = Layout;
const { Paragraph } = Typography;

const JoinTemp = ({ onSubmit, onChangeAll, onChangeChecks, onChangeRadio }) => {
    const { control, formState: { errors, isDirty, isValid } } = useFormContext();

    return (
        <Form
            layout="vertical"
            onFinish={onSubmit}
        >
            <Row>
                <Col span={12} offset={6}>
                    <Content>
                        <div>
                            <StyledLabel htmlFor="name" text="이름" />
                            <StyledInput
                                control={control}
                                name="name"
                                placeholder="이름을 입력하세요."
                                prefix="돋보기"
                                allowClear
                            />
                            <StyledError
                                message={errors.name?.message}
                            />
                        </div>

                        <div>
                            <StyledLabel htmlFor="search" text="검색" />
                            <StyledInput
                                control={control}
                                type='search'
                                name='search'
                                // prefix="AAA"
                                // suffix="RMB"
                                allowClear
                            />
                        </div>

                        <div>
                            <StyledLabel htmlFor="password" text="비밀번호" />
                            <StyledInput
                                control={control}
                                name='password'
                                type='password'
                            />
                        </div>

                        <div>
                            <StyledLabel htmlFor="number1" text="숫자1" />
                            <StyledInput
                                control={control}
                                className='text-right'
                                type='number'
                                name='number1'
                                block
                                addonAfter='원'
                            />
                        </div>

                        <div>
                            <StyledLabel htmlFor="number2" text="숫자2" />
                            <StyledInput
                                control={control}
                                className='text-center'
                                type='number'
                                name='number2'
                                block
                                addonBefore={<button type='button' style={{width: '30px'}} onClick={() => console.log('-')}>-</button>}
                                addonAfter={<button type='button' style={{width: '30px'}} onClick={() => console.log('+')}>+</button>}
                            />
                        </div>

                        <div>
                            <StyledLabel htmlFor="gender" text="성별" />
                            <StyledSelect
                                control={control}
                                name="gender"
                                placeholder="성별을 입력하세요."
                                options={[
                                    { label: "남자", value: "man" },
                                    { label: "여자", value: "women" },
                                ]}
                                style={{ display: "block" }}
                            />
                        </div>

                        <div>
                            <StyledLabel htmlFor="chk1" text="단일 체크 박스" />
                            <StyledCheckbox
                                control={control}
                                name="chk1"
                            >
                                <Paragraph>단일 체크박스 테스트</Paragraph>
                            </StyledCheckbox>
                        </div>

                        <div>
                            <StyledLabel htmlFor="all" text="복수의 체크박스" />
                            <StyledCheckbox
                                control={control}
                                name="all"
                                onChange={onChangeAll}
                            >
                                <Paragraph>전체</Paragraph>
                            </StyledCheckbox>

                            <StyledCheckbox
                                control={control}
                                name="lang"
                                options={[
                                    { label: "자바스크립트", value: "javascript" },
                                    { label: "자바", value: "java" },
                                    { label: "파이썬", value: "python" },
                                ]}
                                onChange={onChangeChecks}
                            />
                        </div>

                        <div>
                            <StyledLabel htmlFor="radio1" text="단일 라디오" />
                            <StyledRadio
                                control={control}
                                name="radio1"
                            >
                                <Paragraph>단일 라디오 테스트</Paragraph>
                            </StyledRadio>
                        </div>

                        <div>
                            <StyledLabel htmlFor="hobby" text="복수의 라디오" />
                            <StyledRadio
                                control={control}
                                name="hobby"
                                options={[
                                    { label: "축구", value: "soccer" },
                                    { label: "농구", value: "basket" },
                                    { label: "테니스", value: "tennis" },
                                ]}
                                onChange={onChangeRadio}
                            />
                        </div>

                        <div>
                            <StyledLabel htmlFor="subscribe" text="구독 상태" />
                            <StyledSwitch
                                control={control}
                                name="subscribe"
                                chkLabel="ON"
                                unChkLabel="OFF"
                            />
                        </div>

                        <div>
                            <StyledLabel htmlFor="intro" text="자기소개" />
                            <StyledTextArea
                                control={control}
                                name="intro"
                                placeholder="자기소개 하기"
                            />
                        </div>

                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            disabled={!isDirty || !isValid}
                        >제출</Button>
                    </Content>
                </Col>
            </Row>
        </Form>
    );
};

export default JoinTemp;