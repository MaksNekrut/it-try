import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS
} from "@/store/auth/actionTypes";

import {
    LoginFailure,
    LoginFailurePayload,
    LoginPayload,
    LoginRequest,
    LoginSuccess,
    LoginSuccessPayload,
    SignupFailure,
    SignupFailurePayload,
    SignupPayload,
    SignupRequest,
    SignupSuccess,
    SignupSuccessPayload
} from "@/store/auth/types";

export const loginRequest = (payload: LoginPayload): LoginRequest => ({
    type: LOGIN_REQUEST,
    payload
})

export const loginSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
    type: LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => ({
    type: LOGIN_FAILURE,
    payload
})

export const signupRequest = (payload: SignupPayload): SignupRequest => ({
    type: SIGNUP_REQUEST,
    payload
})

export const signupSuccess = (payload: SignupSuccessPayload): SignupSuccess => ({
    type: SIGNUP_SUCCESS,
    payload
})

export const signupFailure = (payload: SignupFailurePayload): SignupFailure => ({
    type: SIGNUP_FAILURE,
    payload
})