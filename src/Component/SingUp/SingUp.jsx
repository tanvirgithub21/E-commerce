import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <div className="h-[calc(100vh-64px)] grid place-items-center">
      <form className="flex flex-col gap-4 md:w-[25rem] max-w-[25rem] p-6 rounded-md bg-gray-100 my-5">
        <div className="border-b-2 border-gray-300">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Create a account
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Confirm password" />
          </div>
          <TextInput id="password2" type="password" required={true} />
        </div>
        <Button type="submit">Sing Up</Button>
        <Link to="/login">
          <p className=" text-base font-medium text-center">
            Already <span className="text-blue-500">have a account ?</span>
          </p>
        </Link>
      </form>
    </div>
  );
};

export default SingUp;
