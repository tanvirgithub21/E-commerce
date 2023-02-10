import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[calc(100vh-64px)] grid place-items-center">
      <form className="flex flex-col gap-4 md:w-[25rem] max-w-[25rem] p-6 rounded-md bg-gray-100 my-5">
        <div className="border-b-2 border-gray-300">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Login your account
          </h2>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required={true} />
        </div>
        <Button type="submit">Submit</Button>
        <Link to="/singUp">
          <p className="text-blue-500 text-base font-medium text-center">
            Create new account ?
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
