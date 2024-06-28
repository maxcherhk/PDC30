/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Provider, atom, createStore } from "jotai";
import { ReactNode, createElement } from "react";

/**
 * Global state management powered by Jotai.
 * @see https://jotai.org/
 */
export const store = createStore();
export const breatheModeAtom = atom("4-7-8");
export const breatheTimeAtom = atom("");
export const breatheCycleAtom = atom("");
export const breatheMoodAtom = atom("");
export const userID = atom("");
export const userName = atom("defaultUserName");
export const userTheme = atom("lightTheme");
export const userAvatarURL = atom("defaultAvatarURL");
export const userEmail = atom("defaultEmail");
export const userSession = atom({});
export const surveySession = atom({});
export const albumStoryAtom = atom("");
export const albumPhotoAtom = atom("");
export const imagesURLAtom = atom([]);
export const diaryDateAtom = atom("01/01/2024");
export const diaryThemeAtom = atom("diary");
export const diaryContentAtom = atom("diaryContent");
export const thoughtRecordDateAtom = atom("01/01/2024");
export const thoughtRecordEventAtom = atom("");
export const thoughtRecordThoughtAtom = atom("");
export const thoughtRecordEmotionAtom = atom("");
export const thoughtRecordContentAtom = atom("");
export const thoughtRecordIntensityAtom = atom("");
export const thoughtRecordPositiveThoughtAtom = atom("");
export const thoughtRecordRewriteEventAtom = atom("");
export const pleasantEventStartTimeAtom = atom("");
export const pleasantEventEndTimeAtom = atom("");
export const pleasantEventActivitiesAtom = atom("");
export const pleasantEventPeopleInvolvedAtom = atom("");
export const pleasantEventLocationAtom = atom("");
export const pleasantEventFirstActivityAtom = atom("");
export const pleasantEventSecondActivityAtom = atom("");

export function StoreProvider(props: StoreProviderProps): JSX.Element {
  return createElement(Provider, { store, ...props });
}

export type StoreProviderProps = {
  children: ReactNode;
};
