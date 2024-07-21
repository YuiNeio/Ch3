import Code from "@/components/Code";
import Pagination from "@/components/Pagination";

export default function Installation() {
  return (
    <>
      <h2 className="text-4xl font-bold">Installation</h2>

      <div className="mt-8 text-lg font-light leading-relaxed">
        Node.js dan npm: Pastikan Node.js dan npm (Node Package Manager) sudah terinstal di komputer Anda. Anda dapat mengunduh dan menginstalnya dari situs resmi{" "}
        <a href="https://nodejs.org/en" className="underline">
          Node.js
        </a>{" "}
        and feature icons powered by{" "}
        <a
          href="https://react-icons.github.io/react-icons/"
          className="underline"
        >
          react-icons
        </a>{" "}
        (although you`re free to use any other icon library of your choice).
      </div>

      <div className="mt-8 text-lg font-light leading-relaxed">
        <h2 className="text-2xl font-medium">Installation Guide:</h2>
        <h5 className="text-lg font-medium mt-5">Prerequisites:</h5>
        Ensure you have Node.js and npm (or yarn) installed on your system.
        <h5 className="text-lg font-medium mt-5">Installation Steps:</h5>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            Navigate to the root directory of your project in the terminal.
          </li>
          <li>
            Install the required dependencies by running the following command:
            <Code
              code={`mkdir chyper-bot
cd chyper-bot
# or
npm install express body-parser`}
              header={"Terminal"}
            />
          </li>
          <li>
            Create a file named utils.ts and paste the following code:
            <Code
              code={`// Import necessary libraries and modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();
app.use(bodyParser.json());

// Define a route to handle user inputs
app.post('/chat', (req, res) => {
    const userInput = req.body.message;
    const botResponse = getBotResponse(userInput);
    res.json({ response: botResponse });
});

// Function to generate bot responses
function getBotResponse(input) {
    // Placeholder response logic - customize this with NLP and AI integrations
    if (input.toLowerCase().includes('hello')) {
        return 'Hello! How can I assist you today?';
    } else if (input.toLowerCase().includes('help')) {
        return 'Sure, I am here to help! What do you need assistance with?';
    } else {
        return 'I am not sure how to respond to that. Can you please rephrase?';
    }
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Chyper Bot is running on port ${PORT}`);
});
`}
              header={"Terminal"}
            />
          </li>
        </ul>
        <h5 className="text-lg font-medium mt-5">
          Customization Instructions:
        </h5>
        Choose any component you find useful, copy it to your project, and
        tailor it to meet your specific requirements. Remember, these components
        are customizable and adaptable to suit your needs.
        <br />
        <br />
        Keep in mind that these components are designed to kickstart your
        journey into neobrutalism. It`s up to you to enhance their reusability
        and accessibility.
      </div>

      <Pagination
        prev={{
          name: "Introduction",
          path: "/docs",
        }}
        next={{
          name: "Accordion",
          path: "/docs/components/Accordion",
        }}
      />

      <div className="flex items-center gap-1 text-sm pt-20 pb-14 font-medium text-neutral-900">
        <span>©</span>
        <span>{new Date().getFullYear()}</span>
        <span>with</span>
        <div className="relative inline-flex justify-center items-center">
          <div className="text-red-500 rounded-full">❤️</div>
          <div className="text-red-500 absolute top-0 left-0 animate-ping">
            ❤️
          </div>
          <div className="text-red-500 absolute top-0 left-0 animate-pulse">
            ❤️
          </div>
        </div>
        <span>by</span>
        <span className="hover:dark:text-neutral-400 cursor-pointer">
          Ival Shamkya
        </span>
      </div>
    </>
  );
}
