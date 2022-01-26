import { createAction } from '@reduxjs/toolkit';

export const uploadProfiles = createAction('PROFILES_LOADED');
export const toggleVisibility = createAction('TOGGLE_COMMUNITY_VISIBILITY');
export const setSubscription = createAction('SET_STATUS_SUBSCRIBED');
export const cancelSubscription = createAction('CANCEL_SUBSCRIPTION')
export const disable = createAction('DISABLE_BUTTON');
export const enable = createAction('ENABLE_BUTTON');
export const updateInput = createAction('EMAIL_INPUT_CHANGED');
export const loadCard = createAction('CARD_LOADED');