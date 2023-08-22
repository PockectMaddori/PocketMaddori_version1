import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDoi1Xwv0IWckxImQUTygK_Y8r4THhzAAM",
    authDomain: "pocketmaddori.firebaseapp.com",
    projectId: "pocketmaddori",
    storageBucket: "pocketmaddori.appspot.com",
    messagingSenderId: "784792625231",
    appId: "1:784792625231:web:bf306bc52138cb3bd14a3a",
    measurementId: "G-MF3DLTYGKT"
  };

function App() {
  const [testValue, setTestValue] = useState(null);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);

    const fetchFirestoreData = async () => {
      try {
        const docRef = doc(db, "test_collection", "test_doc");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTestValue(data.test_field);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFirestoreData();
  }, []);

  return (
    <div>
      <h1>Hello, React!</h1>
      {testValue && <p>test_field: {testValue}</p>}
    </div>
  );
}

export default App;
