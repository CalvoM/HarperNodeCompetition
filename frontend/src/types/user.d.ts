export interface BaseUser{
    UserEmail: string;
    Password: string;
}
export interface HTTPError{
  ShowErr: boolean;
  Message: string;
  Variant: string
}