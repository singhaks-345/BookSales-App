import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm  rounded-md px-3 py-1 btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">SignUp</h3>
              {/*name*/}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullame"
                  className="w-80 py-1  px-3 border rounded-md outline-none hover:scale-105"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/*Email*/}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 py-1  px-3 border rounded-md outline-none hover:scale-105"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/*Password*/}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Password"
                  className="w-80 py-1  px-3 border rounded-md outline-none hover:scale-105"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-orange-500 text-white rounded-md px-3 py-1 hover:bg-orange-700 duration-200 hover:scale-105 duration-200">
                  SignUp
                </button>
                <p>
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer hover:text-scale-105"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
