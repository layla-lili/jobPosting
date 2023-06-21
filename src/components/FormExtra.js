export default function FormExtra(){
    return(
        <div className="flex flex-col items-center ">
        {/* <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div> */}

        <div className="text-sm">
          <Link to={"./HomePage"} className="font-medium text-green-600 hover:text-green-500">
            Enter As a Quest
          </Link>
        </div>
        <div className="text-sm">
          <Link to={"./RecruiterSignp"} className="font-medium text-green-600 hover:text-green-500">
            Register as  Reqruiter
          </Link>
        </div>
        
      </div>

    )
}