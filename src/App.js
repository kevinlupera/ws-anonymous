import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  let background = "/header.png";
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  function submit() {
    if (telephone && isValidPhoneNumber(telephone)) {
      window.open(
        generateUrl(telephone, message),
        "_blank",
        "noopener,noreferrer"
      );
    }
  }
  const generateUrl = (telephone, message) => {
    return `https://api.whatsapp.com/send/?phone=${telephone}&text=${
      message ? message : t("hello")
    }`;
  };
  function handleChange(e) {
    setMessage(e.target.value);
  }
  return (
    <div
      className="leading-normal tracking-normal text-indigo-400 p-6 bg-cover bg-fixed"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="h-full">
        <div className="w-full container mx-auto">
          <div className="w-full flex items-center justify-between">
            <a
              className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="/"
            >
              Whatsapp
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                {t("anonymous")}
              </span>
            </a>

            <div className="flex w-1/2 justify-end content-center">
              <a
                className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                href="https://twitter.com/kevin_13k"
              >
                <svg
                  className="fill-current h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
                </svg>
              </a>
              <a
                className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                href="https://www.facebook.com/sharer/sharer.php?u=#"
              >
                <svg
                  className="fill-current h-6"
                  width="25px"
                  height="25px"
                  viewBox="0 0 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="container pt-18 md:pt-30 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              {t("write")}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                {t("without_save")}
              </span>
              {t("contacts")}
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
              {t("phrase")}
            </p>

            <form
              className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
              onSubmit={submit}
            >
              <div className="mb-4">
                <label
                  className="block text-blue-300 py-2 font-bold mb-2"
                  htmlFor="emailaddress"
                >
                  {t("number_phone")}
                </label>
                <PhoneInput
                  value={telephone}
                  onChange={setTelephone}
                  className={`shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out ${
                    telephone && !isValidPhoneNumber(telephone)
                      ? "border-red-500"
                      : ""
                  }`}
                  id="telephone"
                  type="telephone"
                  placeholder="0987654321"
                  defaultCountry="EC"
                  required
                />
                {telephone ? (
                  isValidPhoneNumber(telephone) ? undefined : (
                    <p className="text-red-500 text-xs italic">
                      {t("number_phone_is_invalid")}
                    </p>
                  )
                ) : (
                  <p className="text-red-500 text-xs italic">
                    {t("number_phone_is_required")}
                  </p>
                )}
                <label
                  className="block text-blue-300 py-2 font-bold mb-2"
                  htmlFor="emailaddress"
                >
                  {t("your_message")}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  id="message"
                  type="text"
                  value={message}
                  onChange={handleChange}
                  placeholder="Hola, quisiera me ayudes con..."
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  type="submit"
                >
                  {t("submit")}
                </button>
              </div>
            </form>
          </div>

          <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a
              className="text-gray-500 no-underline hover:no-underline"
              href="/"
            >
              &copy; {t("copyrigth")}
            </a>
            {t("power_by")}
            <a
              className="text-gray-500 no-underline hover:no-underline"
              href="https://kevinlupera.github.io/"
            >
              Kevin Lupera
            </a>
            <a
              className="text-gray-500 no-underline hover:no-underline"
              href="mailito:kevinlupera@gmail.com"
            >
              {t("contact_me")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
