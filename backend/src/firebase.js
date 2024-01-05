// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
import admin, { app } from "firebase-admin";

import { applicationDefault } from "firebase-admin/app";

export const initializeFirebase = () => {
  console.log("Process env", process.env.GOOGLE_APPLICATION_CREDENTIALS);
  const app = admin.initializeApp({
    credential: applicationDefault(),
    databaseURL: "taskflow-boards.firebaseapp.com",
  });
  return app;
};

export const getFirebaseAuth = () => {
  return admin.auth();
};

export const getUIDFromIDToken = (token) => {
  return new Promise((res, rej) => {
    getFirebaseAuth()
      .verifyIdToken(token)
      .then((decoded) => res(decoded.uid))
      .catch((e) => rej(e));
  });
};
