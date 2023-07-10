import React from "react";

const Contact = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleMessageChange = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Send email or perform any other desired action with the form data
  //   console.log('Name:', name);
  //   console.log('Email:', email);
  //   console.log('Message:', message);
  // };

  return (
    <div className="bg-[#4d4c4c] h-screen flex md:justify-center md:items-center">
      <div className="md:w-[40%] md:p-6 p-4 h-fit md:mx-0 mx-auto md:mt-0 mt-10 w-[60%]  bg-slate-900 rounded shadow-lg shadow-black">
        <h2 className="md:text-2xl text-xl font-semibold md:font-bold mb-4  text-white">Contact Me</h2>
        <form
          action="https://getform.io/f/754f2d1d-4dc1-425d-b186-c6a1fa49011d"
          method="POST"
        >
          <div className="mb-4">
            <label htmlFor="name" className=" text-white block mb-2 font-semibold md:font-bold">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold md:font-bold  text-white">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-semibold md:font-bold  text-white"
            >
              Message:
            </label>
            <textarea
              name="message"
              className="w-full p-2 border rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Let's talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
