import { useCollection } from "../hoks/useCollection";

function OnlineUser() {
  const { datam } = useCollection("users");

  return (
    <div className="bg-primary-content w-full max-w-[300px] p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <ul className="flex flex-col gap-4">
        {datam &&
          datam.map((info) => (
            <li
              key={info.id}
              className="flex gap-4 items-center bg-white p-4 rounded-lg shadow hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
            >
              <img
                className="w-14 h-14 rounded-full border-2 border-blue-500"
                src={info.photoURL}
                alt={`${info.displayName}'s avatar`}
              />
              <div className="flex flex-col">
                <p className="text-lg text-black font-semibold">
                  {info.displayName}
                </p>
                <p
                  className={`text-sm ${
                    info.online ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {info.online ? "Online" : "Offline"}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default OnlineUser;
