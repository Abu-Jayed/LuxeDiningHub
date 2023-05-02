import React from "react";
import Navbar from "../Shared/Navbar";

const Blog = () => {
  return (
    <section>
      <Navbar></Navbar>
      <section className="md:mx-auto mt-20 grid md:grid-cols-2  md:w-[900px] md:h-[400px] border-gray-500  gap-1 mb-10">
        {/* modal container-1 */}
        <div className="md:w-[420px] shadow-lg md:m-3 md:h-52 rounded-lg border border-gray-300 p-3">
          <h1 className="text-4xl font-bold">
            Q-1: Uncontroled vs Controled component
          </h1>

          {/* below modal */}
          <div id="modal-1">
            {/* The button to open modal */}
            <label htmlFor="my-modal-1" className="mt-14 md:ml-36 btn">
              Answer
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Q: What is the differences between uncontrolled and controlled
                  components?
                </h3>
                <p className="py-4">
                  <span className="font-bold">ans:</span> In React, uncontrolled components maintain their own state,
                  while controlled components receive updates from their parent
                  components. Uncontrolled components are simpler to use for
                  basic form inputs, but controlled components provide more
                  predictability and ease of debugging for complex forms.
                  Choosing between controlled and uncontrolled components
                  depends on the form requirements and desired level of control
                  over the form's state.
                </p>
                <div className="modal-action">
                  <label htmlFor="my-modal-1" className="btn">
                    Got it!
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal container-2 */}
        <div className="md:w-[420px] shadow-lg md:m-3 md:h-52 rounded-lg border p-2 border-gray-300">
          <h1 className=" text-4xl font-bold">
            Q-2: What is PropTypes in react?
          </h1>

          {/* below modal */}
          <div id="modal-2">
            {/* The button to open modal */}
            <label htmlFor="my-modal-2" className=" md:ml-36 mt-4 btn">
              Answer
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Q: How to validate React props using PropTypes
                </h3>
                <p className="py-4">
                <span className="font-bold">ans:</span> To validate React props using PropTypes, import the PropTypes
                  library, define the expected props as an object in the
                  component, and use PropTypes to check the types of the passed
                  props. For example, PropTypes.string would check that a prop
                  is a string, while PropTypes.number.isRequired would check
                  that a prop is a required number.
                </p>
                <div className="modal-action">
                  <label htmlFor="my-modal-2" className="btn">
                    Got it!
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal container-3 */}
        <div className="md:w-[420px] shadow-lg md:m-3 md:h-44 border rounded-lg p-3 border-gray-300">
          <h1 className="text-4xl font-bold">Q-3: nodejs vs express js!</h1>

          {/* below modal */}
          <div id="modal-3">
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="md:ml-36 mt-4 btn">
              Answer
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Q: What is the difference between nodejs and express js.
                </h3>
                <p className="py-4">
                <span className="font-bold">ans:</span> Node.js is a runtime environment for executing JavaScript
                  outside of a web browser, while Express.js is a web framework
                  for Node.js. Node.js provides the core functionality for
                  running JavaScript on the server-side, while Express.js
                  provides additional features for building web applications,
                  such as routing, middleware, and templating. While Node.js can
                  be used without a framework, Express.js simplifies and
                  streamlines the development process for building web
                  applications with Node.js.
                </p>
                <div className="modal-action">
                  <label htmlFor="my-modal-3" className="btn">
                    Got it!
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal container */}
        <div className="md:w-[420px] shadow-lg md:m-3 p-3 md:h-44  border rounded-lg border-gray-300">
          <h1 className="text-4xl font-bold">Q-4: What is a custom hook?</h1>

          {/* below modal */}
          <div id="modal-4">
            {/* The button to open modal */}
            <label htmlFor="my-modal-4" className="md:ml-36 mt-4 btn">
              Answer
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                 Q: What is a custom hook, and why will you create a custom hook?
                </h3>
                <p className="py-4">
                <span className="font-bold">ans:</span> A custom hook is a reusable function that encapsulates
                  commonly used logic in React components. Creating a custom
                  hook helps to avoid code duplication, makes code more modular,
                  and promotes code reuse across different components. It also
                  simplifies testing and maintenance of the code.
                </p>
                <div className="modal-action">
                  <label htmlFor="my-modal-4" className="btn">
                    Got it!
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blog;
