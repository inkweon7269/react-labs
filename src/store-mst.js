import { types } from "mobx-state-tree";

const URL = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async () => {
    const response = await fetch(URL);
    return response.json();
}

export const UserModel = types.model("UserModel", {
    id: types.number,
    name: types.optional(types.string, "UNNAMED USER"),
    email: types.optional(types.string, ""),
    website: types.optional(types.string, ""),
}).actions((user) => ({
    setName(newName) {
        user.name = newName
    }
}));

export const UserStore = types.model("UserStore", {
    users: types.array(UserModel),
}).actions(self => ({
    setUsers(newUsers) {
        self.users = newUsers
    },
    async fetchUsers() {
        const data = await fetchUsers();
        const newUsers = data.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            website: user.website
        }));
        self.setUsers(newUsers);
    }
})).views((self) => ({
    get onlyEven() {
        return self.users.filter(user => user.id % 2 === 0);
    }
}));

let _userStore
export const useUsers = () => {
    if (!_userStore) {
        _userStore = UserStore.create({
            users: []
        })
    }

    return _userStore
}