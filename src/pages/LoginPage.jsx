const LoginPage = () => {
  return (
    <form className="w-full mx-auto bg-gray-800 p-10 px-40 shadow shadow-xl text-gray-200  shadow">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-300 text-lg font-bold mb-2">
            Account Number
          </label>
          <input
            className="appearance-none block w-full bg-gray-700 text-gray-300 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
            type="text"
            placeholder="21212"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-300 text-lg font-bold mb-2">
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-700 text-gray-300 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
            type="password"
            placeholder="******************"
          />
        </div>
        <button className="mx-auto mt-6 btn btn-primary btn-wide">Login</button>
      </div>
    </form>
  );
};

export default LoginPage;
