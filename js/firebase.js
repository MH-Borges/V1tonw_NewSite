  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB5eWuA63YrKVaACjbcqAX9YzUifmz_n2Y",
    authDomain: "v1town.firebaseapp.com",
    projectId: "v1town",
    storageBucket: "v1town.appspot.com",
    messagingSenderId: "129901564206",
    appId: "1:129901564206:web:8559318065059f9943aabf",
    measurementId: "G-M9H2NYN3F5"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);