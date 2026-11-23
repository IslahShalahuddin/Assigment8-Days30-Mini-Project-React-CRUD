import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../services/userService";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function Users(){
    const [users, setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] =useState("");

    useEffect(() => {
        async function fetchUser() {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    },[]);

    if (loading) 
        return <Loading />

    if (error) 
        return <ErrorMessage message={error} />

    
return (
    <div className="min-h-screen bg-[#121421] px-5 py-12 text-white md:px-10">
        <div className="mx-auto max-w-6xl">

            {/* Header */}
            <div className="mb-10">
                <p className="mb-2 text-sm font-medium text-indigo-400">
                    DIBITECH COMMUNITY
                </p>

                <h1 className="text-3xl font-bold md:text-4xl">
                    Our Users Community Members.
                </h1>
            </div>

            {/* User count */}
            <div className="mb-6">
                <p className="text-sm text-gray-400">
                    Total Users: <span className="font-semibold text-white">{users.length}</span>
                </p>
            </div>

            {/* User Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {users.map((user) => (
                    <div
                        key={user.id}
                        className="rounded-2xl border border-white/10 bg-[#202337] p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/50"
                    >
                        {/* Avatar and name */}
                        <div className="mb-5 flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold uppercase">
                                {user.name.firstname.charAt(0)}
                                {user.name.lastname.charAt(0)}
                            </div>

                            <div className="min-w-0">
                                <h3 className="truncate font-semibold">
                                    {user.name.firstname} {user.name.lastname}
                                </h3>

                                <p className="truncate text-sm text-gray-400">
                                    User ID: id={user.id}
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mb-5">
                            <p className="text-xs text-gray-500">
                                EMAIL ADDRESS
                            </p>

                            <p className="mt-1 truncate text-sm text-gray-300">
                                {user.email}
                            </p>
                        </div>

                        {/* Detail Button */}
                        <Link
                            to={`/users/${user.id}`}
                            className="block rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-semibold transition hover:bg-indigo-500"
                        >
                            View Details →
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    </div>
);
}

export default Users