import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { login as authLogin } from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm} from 'react-hook-form'
import { Button, Input } from './index'
import authService from '../appwrite/auth'
import { Logo } from './index'



export function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
   
    
    const create = async (data) => {
        setError("");
        try {
          const session = await authService.createAccount(data);
          if (session) {
            const userData = await authService.getCurrentUser();
            if (userData) {
              dispatch(authLogin(userData));
              navigate("/");
            }
          }
        } catch (error) {
          setError("123",error.message );
        }
      };
      return (
        <div className="flex items-center justify-center py-2">
          <div
            className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
          >
            <div className="mb-2 flex justify-center">
              <span className="inline-block w-full max-w-[100px]">
                <Logo width="100%" />
              </span>
            </div>
            <p className="mt-2 text-center text-base text-black/60">
              Already have an account?&nbsp;
              <Link
                to="/login"
                className="font-medium text-primary transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(create)}>
              <div className="space-y-5">
                <Input
                  label="Full Name :"
                  type="text"
                  placeholder="Enter full name"
                  {...register("name", {
                    required: true,
                  })}
                />
    
                <Input
                  label="Email :"
                  type="email"
                  placeholder="Enter your email : "
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    },
                  })}
                />
                <Input
                  label="Password :"
                  type="password"
                  placeholder="Enter your Password : "
                  {...register("password", {
                    required: true,
                  })}
                />
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </div>
            </form>
          </div>
        </div>
      );
}
export default Signup;
