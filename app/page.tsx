"use client";

import { WalletButton } from "./components/WalletButton";
import { useState } from "react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    const analysis = "Analyzing token: " + input;
    setMessages((prev) => [...prev, { role: "assistant", content: analysis }]);
    setInput("");
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 text-black dark:text-white">
      <header className="w-full flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            No Rug
          </h1>
          <ThemeSwitcher />
        </div>
        <WalletButton />
      </header>

      <main className="flex flex-col max-w-3xl mx-auto w-full">
        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center -mt-32 space-y-8">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-3xl mx-auto">
                🔍️
              </div>
              <h2 className="text-4xl font-bold text-black dark:text-white">
                No Rug Protection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-md">
                Analyze Solana tokens instantly to detect potential risks and
                protect your investments.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-2xl px-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter token address to analyze..."
                  className="flex-1 p-4 border rounded-xl bg-white dark:bg-gray-800 text-black dark:text-white border-gray-200 dark:border-gray-700 text-lg placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black rounded-xl text-lg font-medium"
                >
                  Analyze
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 mb-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg ${
                    message.role === "user"
                      ? "bg-black dark:bg-white text-white dark:text-black ml-auto"
                      : "bg-gray-100 dark:bg-gray-800 text-black dark:text-white mr-auto"
                  } max-w-[80%]`}
                >
                  {message.content}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="sticky bottom-0 w-full">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter token address..."
                  className="flex-1 p-3 border rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white border-gray-200 dark:border-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black rounded-lg"
                >
                  Analyze
                </button>
              </div>
            </form>
          </>
        )}
      </main>

      <footer className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© 2024 No Rug. Built on Solana.</p>
        <div className="flex gap-4 justify-center mt-2">
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
