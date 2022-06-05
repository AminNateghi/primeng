import { createReducer, on } from '@ngrx/store';
import { Profile } from '../models/profile.model';
import { AddAvatarAction, AddInfoAction, AddUserAction } from './profile.action';

const initialState: Profile = {
  image: null,
  info: null,
  user: null
};

export const profileReducer = createReducer(
  initialState,
  on(AddAvatarAction, (state, action): Profile => {
    return {
      ...state,
      image: action.avatar
    };
  }),
  on(AddInfoAction, (state, action) => {
    return {
      ...state,
      info: action.info
    }
  }),
  on(AddUserAction, (state, action) => {
    return {
      ...state,
      user: action.user
    }
  })
)

