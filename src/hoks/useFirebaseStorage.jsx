import { toast } from "react-toastify";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useFirebaseStorage(collectionName) {
  const navigate = useNavigate();
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

  const deletDocument = async (id) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      toast.success("Ducument delet succesfuly");
    } catch (error) {
      toast.error(error.code);
    } finally {
      navigate("/");
    }
  };

  return { addDocument, isPending, error, updateDocument, deletDocument };
}

export { useFirebaseStorage };
