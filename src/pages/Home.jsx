import React from "react";
import { useCollection } from "../hoks/useCollection";
import DarkMode from "../components/DarkMode";
import { Link } from "react-router-dom";

function Home() {
  const { datam } = useCollection("project");

  return (
    <div>
      <DarkMode />
      <h1 className="text-3xl mt-10 mb-10">Dashboard</h1>
      <div className="flex gap-3">
        {datam &&
          datam.map((doc) => {
            return (
              <Link
                to={`about/${doc.id}`}
                type="button"
                key={doc.id}
                className="card bg-base-100 w-60 shadow-xl cursor-pointer"
              >
                <div className="card-body">
                  <h2 className="card-title">{doc.projectname}</h2>
                  <p> {doc.textarea.substring(0, 100) + "..."}</p>
                  {/* <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                    <div className="avatar">
                      <div className="w-12">
                        <img src={doc.photoURL} alt="" />
                      </div>
                    </div>
                  </div> */}
                  <div className="card-actions justify-between mt-8">
                    <h1>User photoURL</h1>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
