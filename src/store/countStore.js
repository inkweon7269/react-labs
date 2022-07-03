import { action, makeObservable, observable, computed, makeAutoObservable } from "mobx";
import RootStore from "./index";

class CountStore {
    // constructor(rootStore: RootStore) {
    //     makeAutoObservable(this);
    // }

    constructor() {
        makeObservable(this, {
            number: observable,
            increase: action,
            decrease: action,
            double: computed
        })
    }

    number = 0;

    increase = () => {
        this.number = this.number + 2;
    };

    decrease = () => {
        this.number--;
    };

    /*
        computed

        - 연산 작업이 있는 경우 사용되며 변화가 있는 경우 캐싱 작업을 진행한다.
        - get 메서드에 일반적으로 적용하거나 Model 객체간 전환 시점에 적용
        - computed 적용된 메서드를 수행할 때 해당 observable state 변화가 없을 경우 내부 로직을 생략
     */
    get double() {
        return this.number * 2;
    }
}

export default CountStore;