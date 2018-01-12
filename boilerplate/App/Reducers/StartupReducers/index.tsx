import { createAction } from "typesafe-actions";

/* ------------- Types and Action Creators ------------- */

export enum StartupActionTypes {
  STARTUP = "startup",
}

const actions = {
  startup: createAction(StartupActionTypes.STARTUP),
};

export const StartupActions = actions;
