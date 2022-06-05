import { createAction, props } from '@ngrx/store';
import { Avatar, Info } from '../models/profile.model';
import { User } from '../models/user.model';

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
