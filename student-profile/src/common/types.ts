import {AppStateType, PropertiesTypes} from "../redux/store";
import {actionsUsers} from "../redux/actionCreator/actionsUsers";
import {ThunkAction} from "redux-thunk";

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address extends Geo {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo
  };
}

export interface UserInterface extends Address {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: Company
}

export interface MyInfo {
  name: string;
  position: string;
  id: string
}

export interface Admin {
  name: string,
  role: string
}

export type UserReducerActionTypes = ReturnType<
  PropertiesTypes<typeof actionsUsers>
  >

export type UserThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  UserReducerActionTypes
  >