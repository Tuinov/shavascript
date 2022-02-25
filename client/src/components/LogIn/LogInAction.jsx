import React from 'react';
import axios from "axios";
import LogInForm from './LogInForm';
import { useState } from 'react';
import { Cookies } from 'react-cookie';

const logInData = {
    email: '',
    password: '',
};

function LogInAction(props) {
    const { cookies, setCookie } = props.cookies;
    const [errorMessage, setErrorMessage] = useState(<></>)

    async function onSubmit(logInData) {
        const users = await axios.get('./mock-up/users.json').then(res => res.data);
        users.forEach(element => {
            if (element.email == logInData.email && element.password == logInData.password) {
                logInData.id = element.id;
                logInData.role = element.role;
                setCookie('authData', logInData, { path: '/' });
            }
        });
    }
    function changeErrorMessage() {
        if (cookies.authData == undefined) {
            setErrorMessage(<div class="text-danger">Не верно введены данные!</div>)
        } else { setErrorMessage(<></>) }
    }

    /* beautify ignore:start */
    const logInForm = <LogInForm initialData={logInData} onSubmit={onSubmit} errorMessage={(errorMessage)} changeError={changeErrorMessage} />;
    return <div>
        {logInForm}
    </div>;
    /* beautify ignore:end */
}


export default LogInAction;