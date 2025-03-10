import { useForm } from "react-hook-form";

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form
        className="flex flex-col gap-4 p-6 bg-white rounded-md shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("name", {
            required: true,
            minLength: 3,
          })}
          placeholder="Name"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-600">Name must be at least 3 characters long</p>
        )}
        <input
          {...register("subject", {
            required: true,
            minLength: 3,
          })}
          placeholder="Subject"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
         {errors.subject && (
          <p className="text-red-600">Subject must be at least 3 characters long</p>
        )}

        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /noroff\.no/,
              message: "Email must include @student.noroff.no",
            },
          })}
          placeholder="Email address"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email &&
          (errors.email.message ? (
            <p className="text-red-600">{errors.email.message}</p>
          ) : (
            <p className="text-red-600">Unexpected error</p>
          ))}
        <textarea
          {...register("message", {
            required: true,
            minLength: 3,
          })}
          placeholder="Message"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32"
        />
        {errors.message && (
          <p className="text-red-600">Text must be at least 3 characters long</p>
        )}
        <button
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
