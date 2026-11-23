import { useState } from "react";
import { loginUser } from "../services/authService";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setToken} = useAuth();
    const navigate = useNavigate();
    const [loading,setLoading]= useState(false);

    async function handleLogin(e) {
        e.preventDefault();

        if (!username || !password) {
            alert("Username dan password wajib diisi");
            return;
        }

        setLoading(true)

        try{
            const data = await loginUser({
                username,
                password
            });

            localStorage.setItem("token", data.token);
            setToken(data.token);

            navigate("/");
        } catch (error) {
            alert("Login Gagal: " + error.message)
        } finally {
            setLoading(false)
        }
        
    }

    return (
        <main className="flex min-h-[80vh] items-center justify-center px-5 py-12">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#202337] p-8 shadow-xl">

                <div className="mb-8 text-center">
                    <h1 className="mb-2 text-3xl font-bold text-white">
                        Welcome Back
                    </h1>

                    <p className="text-sm text-gray-400">
                        Login to your DibiTech account
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">

                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-[#121421] px-4 py-3 text-white outline-none focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-[#121421] px-4 py-3 text-white outline-none focus:border-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>

                <p className="mt-6 text-center text-xs text-gray-500">
                    DibiTech Marketplace
                </p>
            </div>
        </main>
    );
}
export default Login