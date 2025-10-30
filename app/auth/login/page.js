import { TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full md:w-[350px] max-h-[400px] rounded md:shadow-md md:py-8 px-3 flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold text-center text-center">Sign in</h1>
          <h1 className="text-2xl font-semibold text-center text-center">Create account or sign in</h1>
        </div>
        <form className="justify-center items-center">
          <div className="mb-2 w-full">
            <TextField
            fullWidth
            size="small"
            placeholder="@james.com"
            className="w-full"
              />
          </div>
          <button className="text-white bg-blue-500 w-full rounded-md p-1">Login</button>
        </form>
        <p className="text-center text-gray-400">or sign up with</p>
        <div className="flex justify-center gap-4">
        <form>
          <button className="w-10px h-30px border border-gray-300 cursor pointer rounded-md shadow-lg ">
            <FcGoogle className="text-4xl" />
          </button>
        </form>
        <form>
          <button className="w-10px h-30px border border-gray-300 cursor pointer rounded-md shadow-lg ">
            <VscGithubInverted className="text-4xl" />
          </button>
        </form>
        </div>



      </div>
    </main>
  );
}