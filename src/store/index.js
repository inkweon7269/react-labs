import CountStore from "./countStore";
import TodoStore from "./TodoStore";

class RootStore {
    count: CountStore;
    todo: TodoStore;

    constructor() {
        this.count = new CountStore(this);
        this.todo = new TodoStore(this);
    }
}

export default RootStore;