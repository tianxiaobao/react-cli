import http from '@/http';
import TYPE from './type';
import { URL } from '../config';

// 获取用户信息
export function getUserInfo() {
    return (dispatch) => {
        http.get(URL.getUserInfo).then(res => {
            if(res.code === 200) {
                dispatch({
                    type: TYPE.SET_USER_INFO,
                    data: res.data
                });
            }
        }).catch(err => {
            console.log(err);
        });
    };
}