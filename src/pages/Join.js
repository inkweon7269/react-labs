import {useForm, FormProvider} from "react-hook-form";
import {Button} from "antd";
import {useToggle} from "react-use";
import SelectModal from "../templates/SelectModal";
import JoinTemp from "../templates/JoinTemp";

const Join = () => {
    const joinForm = useForm({
        mode: "onChange",
        defaultValues: {
            // name: '동해물',
            // gender: 'man',
            lang: ['javascript', 'python']
        }
    });

    const onChangeAll = (data) => {
        (data)
            ? joinForm.setValue('lang', ['javascript', 'java', 'python'])
            : joinForm.setValue('lang', [])
    }
    const onChangeChecks = (data) => {
        (data.length === 3)
            ? joinForm.setValue('all', true)
            : joinForm.setValue('all', false);
    }
    const onChangeRadio = (data) => {
        console.log(data);
    }
    const onJoinSubmit = (data) => {
        const {all, ...result} = data;

        console.log(data);
        console.log(result);
    }

    const [modalVisible, setModalVisible] = useToggle(false);
    const modalForm = useForm({
        mode: 'onChange',
        defaultValues: {
            hobby: ''
        }
    })
    const onModalSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <FormProvider {...joinForm}>
                <JoinTemp
                    onChangeAll={onChangeAll}
                    onChangeChecks={onChangeChecks}
                    onChangeRadio={onChangeRadio}
                    onSubmit={joinForm.handleSubmit(onJoinSubmit)}
                />
            </FormProvider>


            <Button
                onClick={() => {
                    setModalVisible();
                    modalForm.setValue('hobby', 'japan')
                }}
            >
                일본을 선택한 상태에서 모달
            </Button>

            <FormProvider {...modalForm}>
                <SelectModal
                    visible={modalVisible}
                    onCancel={() => setModalVisible()}
                    onSubmit={modalForm.handleSubmit(onModalSubmit)}
                />
            </FormProvider>
        </>
    );
};

export default Join;