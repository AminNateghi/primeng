import { Action, createAction, props } from '@ngrx/store';
import { Avatar, Info, User } from '../models/profile.model';

export enum ProfileActionType {
  AddAvatar = '[Profile] Add Avatar',
  AddInfo = '[Profile] Add Info',
  AddUser = '[Profile] Add User',
}

export const AddAvatarAction = createAction(
  ProfileActionType.AddAvatar,
  props<{ avatar: Avatar }>()
);

export const AddInfoAction = createAction(
  ProfileActionType.AddInfo,
  props<{ info: Info }>()
);

export const AddUserAction = createAction(
  ProfileActionType.AddUser,
  props<{ user: User }>()
);
