import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBix1FQJebIUq1Wa0XCN3rgNf2-VGmXlAs",
  authDomain: "ryan-basque-portifolio-fa8f4.firebaseapp.com",
  databaseURL: "https://ryan-basque-portifolio-fa8f4-default-rtdb.firebaseio.com",
  projectId: "ryan-basque-portifolio-fa8f4",
  storageBucket: "ryan-basque-portifolio-fa8f4.appspot.com",
  messagingSenderId: "313152388697",
  appId: "1:313152388697:web:18a6f86ae486d29263fb48",
  measurementId: "G-5VM3G6M8D5"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

let analytics;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
