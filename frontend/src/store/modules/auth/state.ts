export interface UserDetails{
    UserEmail: string;
    UserName: string;
}
export interface AuthConfig{
    accessToken: string;
    refreshToken: string;
    clientID: string | null;
    clientSecret?: string | null;
}

export type State = {
    user: UserDetails | null,
    authConfig: AuthConfig | null
}

export const state: State = {
    user: null,
    authConfig: null
}