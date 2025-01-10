import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

function useDocuments(collectionName, id) {
  const [document, setDocument] = useState();
  useEffect(() => {
    const data = onSnapshot(doc(db, collectionName, id), (doc) => {
      setDocument({ id: doc.id, ...doc.data() });
    });
    return () => data();
  }, []);
  return { document };
}

export default useDocuments;
