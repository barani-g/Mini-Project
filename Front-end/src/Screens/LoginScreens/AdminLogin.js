import React from 'react';
import { Link } from 'react-router-dom';


function AdminLogin() {
  return (
   <div class="relative flex min-h-screen">
  <div class="flex min-w-0 flex-auto flex-col items-center bg-white sm:flex-row sm:justify-center md:items-start md:justify-start">
    <div class="relative hidden h-full flex-auto items-center justify-center overflow-hidden bg-purple-900 bg-cover bg-no-repeat p-10 text-white sm:w-1/2 md:flex xl:w-3/5">
      <div class="bg-mypeach absolute inset-0 z-0"></div>
      <div class="z-10 w-full max-w-md">
        <div class="mb-6 font-bold leading-tight sm:text-4xl xl:text-5xl text-black">Reference site about Lorem Ipsum..</div>
        <div class="xl:text-md font-normal text-black sm:text-sm">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</div>
      </div>
    </div>
    <div class="w-full bg-white p-8 sm:w-auto sm:rounded-lg md:flex md:h-full md:items-center md:justify-center md:rounded-none md:p-10 lg:p-14 xl:w-2/5">
      <div class="w-full max-w-md space-y-8">
        <div class="text-center">
          <h2 class="mt-6 text-3xl font-bold text-gray-900">Welcome Back!</h2>
          <p class="mt-2 text-sm text-gray-500">Please sign in to your account</p>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="relative">
            <label class="ml-3 text-sm font-bold tracking-wide text-gray-700">Email</label>
            <input class="w-full rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-indigo-500 focus:outline-none" type="" placeholder="mail@gmail.com" value="" />
          </div>
          <div class="mt-8 content-center">
            <label class="ml-3 text-sm font-bold tracking-wide text-gray-700"> Password </label>
            <input class="w-full content-center rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-indigo-500 focus:outline-none" type="" placeholder="Enter your password" value="" />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 rounded border-gray-300 bg-blue-500 focus:ring-blue-400" />
              <label for="remember_me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
            </div>
            <div class="text-sm">
              <a href="#" class="text-mypeach hover:text-black"> Forgot your password? </a>
            </div>
          </div>
          
          <div>
          <Link to="/AdminHome">
            <button type="submit" class="bg-mypeach flex w-full cursor-pointer justify-center rounded-lg bg-gradient-to-r p-4 font-semibold tracking-wide text-black hover:text-white shadow-lg transition duration-500 ease-in hover:bg-black hover:bg-gradient-to-l">Sign in</button>
            </Link>
          </div>
          
          <p class="text-md mt-10 flex flex-col items-center justify-center text-center text-gray-500">
            <span>Don't have an account?</span>
            <Link to="/AdminRegister">
            <button class="text-mypeach cursor-pointer no-underline transition duration-300 ease-in hover:text-black hover:underline">Sign up</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default AdminLogin