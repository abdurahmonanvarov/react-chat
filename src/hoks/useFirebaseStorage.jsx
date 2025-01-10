import { toast } from "react-toastify";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  documentId,
} from "firebase/firestore";
import { useState } from "react";

function useFirebaseStorage(collectionName) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const addDocument = async (data) => {
    setIsPending(true);
    try {
      await addDoc(collection(db, collectionName), data);
      toast.success("Malumot qoshildi");
    } catch (error) {
      toast.warn("Malumot qoshilishda muammo chiqildi");
      setError(error.code);
    } finally {
      setIsPending(false);
    }
  };
  const updateDocument = async (document, id) => {
    setIsPending(true);
    const docRof = doc(db, collectionName, id);
    await updateDoc(docRof, document);
    setIsPending(false);
  };

  return { addDocument, isPending, error, updateDocument };
}

export { useFirebaseStorage };
