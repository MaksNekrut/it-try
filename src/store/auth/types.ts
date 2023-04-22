import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
} from "@/store/auth/actionTypes";

export interface IAuth {
    token: string;
}

export interface AuthState {
    pending: boolean;
    token: string;
    error: string | null;
}

interface IAuthValues {
    email: string;
    password: string;
}

export interface LoginPayload {
    values: IAuthValues;
    callback: any;
}

export interface LoginSuccessPayload {
    token: string;
}

export interface LoginFailurePayload {
    error: string;
}

export interface SignupSuccessPayload {
    token: string;
}

export interface SignupFailurePayload {
    error: string;
}

export interface LoginRequest {
    type: typeof LOGIN_REQUEST;
    payload: LoginPayload;
}

export type LoginSuccess = {
    type: typeof LOGIN_SUCCESS,
    payload: LoginSuccessPayload
}

export type LoginFailure = {
    type: typeof LOGIN_FAILURE,
    payload: LoginFailurePayload
}

export interface SignupPayload {
    values: IAuthValues,
    callback: any
}

export interface SignupRequest {
    type: typeof SIGNUP_REQUEST,
    payload: SignupPayload
}

export type SignupSuccess = {
    type: typeof SIGNUP_SUCCESS,
    payload: SignupSuccessPayload
}

export type SignupFailure = {
    type: typeof SIGNUP_FAILURE,
    payload: SignupFailurePayload
}

export type AuthActions =
    LoginRequest
    | LoginSuccess
    | LoginFailure
    | SignupFailure
    | SignupRequest
    | SignupSuccess;
