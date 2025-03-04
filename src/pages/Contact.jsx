import { useForm } from "react-hook-form";

export function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col gap-4 mx-auto max-w-md p-6 bg-white rounded-md shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("name", {
          required: true,
          minLength: 3,
        })}
        placeholder="Name"
      />
      <input
        {...register("subject", {
          required: true,
          minLength: 3,
        })}
        placeholder="Subject"
      />
      <input
        {...register("email", {
          required: true,
          pattern: {
            value: /noroff\.no/,
            message: "Email must include @student.noroff.no",
          },
        })}
        placeholder="Email address"
      />
      <input
        {...register("message", {
          required: true,
          minLength: 3,
        })}
        placeholder="Message"
      />
      <button
        className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
        type="submit"
      >
        Submit
      </button>
    </form>
  );

}
