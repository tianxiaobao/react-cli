import TYPE from '../actions/type';

const initState = {
    userInfo: {}
};

export default function DemoReducer(state = initState, action) {
    const {data, type} = action;

    switch (type) {
    case TYPE.SET_USER_INFO:
        return {
            ...state,
            userInfo: Object.assign({}, state.userInfo, data)
        };
    default:
        return state;
    }
}