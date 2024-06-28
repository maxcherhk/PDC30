/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { createElement } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { BaseLayout, MainLayout, RootError } from "../components";

/**
 * Application routes
 * https://reactrouter.com/en/main/routers/create-browser-router
 */
export const router = createBrowserRouter([
  {
    path: "",
    element: <BaseLayout />,
    errorElement: <RootError />,
    children: [
      { path: "login", lazy: () => import("./login") },
      { path: "privacy", lazy: () => import("./privacy") },
      { path: "terms", lazy: () => import("./terms") },
      { path: "emailLoginPage", lazy: () => import("./emailLoginPage") },
    ],
  },
  {
    path: "",
    element: <MainLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Navigate to="/homepage" replace /> },
      { path: "album", lazy: () => import("./postAlbumPage") },
      { path: "homepage", lazy: () => import("./homepage") },
      { path: "module1", lazy: () => import("./module1") },
      { path: "module2", lazy: () => import("./module2") },
      { path: "module3", lazy: () => import("./module3") },
      { path: "module4", lazy: () => import("./module4") },
      { path: "module5", lazy: () => import("./module5") },
      { path: "module6", lazy: () => import("./module6") },
      { path: "module7", lazy: () => import("./module7") },
      { path: "module8", lazy: () => import("./module8") },
      { path: "module9", lazy: () => import("./module9") },
      { path: "module10", lazy: () => import("./module10") },
      { path: "breathingExercise", lazy: () => import("./breathingExercise") },
      {path: "userDiaryRecord", lazy: () => import("./userDiaryRecord") },
      {path: "userThoughtModificationRecord", lazy: () => import("./userThoughtModificationRecord") },
      {path: "userAlbumRecord", lazy: () => import("./userAlbumRecord") },
      {path: "userBreathRecord", lazy: () => import("./userBreathRecord") },
      {path: "userPleasantEventSchedulingRecord", lazy: () => import("./userPleasantEventSchedulingRecord") },
      {
        path: "pleasantEventScheduling",
        lazy: () => import("./pleasantEventScheduling"),
      },
      {
        path: "thoughtModificationRecord",
        lazy: () => import("./thoughtModificationRecord"),
      },
      {
        path: "chatbot",
        lazy: () => import("./chatbot"),
      },
      { path: "breatheAnimation", lazy: () => import("./breatheAnimation") },
      { path: "postAlbumPage", lazy: () => import("./postAlbumPage") },
      { path: "goodThingsDiary", lazy: () => import("./goodThingsDiary") },
      { path: "diaryPDFPreview", lazy: () => import("./diaryPDFPreview") },
    ],
  },
]);

export function Router(): JSX.Element {
  return createElement(RouterProvider, { router });
}

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
