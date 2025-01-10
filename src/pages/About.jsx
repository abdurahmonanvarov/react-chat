import { useParams } from "react-router-dom";
import useDocuments from "../hoks/useDocuments";
import { useState } from "react";
import { useFirebaseStorage } from "../hoks/useFirebaseStorage";
import { Timestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function About() {
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const { document } = useDocuments("project", id);
  const [message, setMessage] = useState("");
  const { updateDocument } = useFirebaseStorage("project");
  if (!document) {
    return <div className="loading"></div>;
  }

  const hendleSubmit = async (e) => {
    e.preventDefault();
    console.log(message);
    const infos = {
      id: uuidv4(),
      message,
      atTime: Timestamp.fromDate(new Date()),
      owner: {
        displayName: user.displayName,
        photoURL: user.photoURL,
        id: user.uid,
      },
    };
    await updateDocument(
      {
        comments: [...document.comments, infos],
      },
      id
    );

    setMessage("");
  };

  return (
    <div className="grid grid-cols-2 gap-16 ">
      <div className="flex items-start min-h-screen bg-gray-100">
        <div className="card w-96 bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-blue-500">{document.projectname}</h2>
            <p>{document.textarea}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-2">Delet</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl">Chat:</h1>
        {document.comments.length == 0 ? (
          <h2 className="text-center text-2xl my-10 opacity-50 ">
            No comment yet
          </h2>
        ) : (
          <div className="h-48  overflow-auto">
            {document.comments.map((doc) => {
              return (
                <div
                  key={doc.uid}
                  className={`chat ${
                    user.uid == doc.owner.id ? "chat-end" : "chat-start"
                  }`}
                >
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src={doc.owner.photoURL}
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    {doc.owner.displayName}
                    <time className="text-xs opacity-50"></time>
                  </div>
                  <div className="chat-bubble">{doc.message}</div>
                </div>
              );
            })}
          </div>
        )}
        <div>
          <form onSubmit={hendleSubmit} className="flex flex-col items-center">
            {" "}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Message:</span>
              </div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="textarea textarea-bordered h-24"
                placeholder="Type here"
              ></textarea>
            </label>
            <button className="btn btn-primary w-full mt-3">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
