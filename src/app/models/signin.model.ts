export interface SignInModel {
    login: string;
    password: string;
}

export interface SignInResponseModel {
    success: boolean;
    token: string;
}