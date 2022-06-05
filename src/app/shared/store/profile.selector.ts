import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Profile } from "../models/profile.model";

const getProfileState = createFeatureSelector<Profile>('profile');

export const getProfile = createSelector(
  getProfileState,
  state => state
);

export const getProfileAvatar = createSelector(
  getProfile,
  state => state.image
);

export const getProfileInfo = createSelector(
  getProfile,
  state => state.info
);

export const getProfileUser = createSelector(
  getProfile,
  state => state.user
);