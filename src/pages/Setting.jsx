import { useSelector } from "react-redux";

function Setting() {
  //const { datam } = useCollection("users");
  const { user } = useSelector((state) => state.user);
  console.log(user);

  //const singleUser = datam ? datam[0] : null;

  return (
    <div>
      {user && (
        <div className="flex flex-col items-center justify-center bg-gray-100">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">{user.displayName}</h1>

          {/* Upper Section */}
          <div className="relative bg-pink-200 w-full h-52 rounded-lg flex items-center justify-center mb-40">
            {/* Circle */}
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="absolute top-20 w-48 h-48 bg-pink-300 rounded-full border border-gray-300"
            />
          </div>

          {/* Input fields */}
          <div className="flex justify-between gap-7 mt-6">
            <input
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue={user.displayName}
            />
            <input
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue={user.email}
            />
          </div>

          {/* Save Button */}
          <button className="btn mt-6 block w-96 h-14 text-white font-bold rounded-md">
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default Setting;
