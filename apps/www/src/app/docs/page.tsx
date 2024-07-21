import Pagination from "@/components/Pagination";

export default function Introduction() {
  return (
    <div>
      <h2 className="text-4xl font-bold">Introduction</h2>

      <div className="mt-8 text-lg font-light leading-relaxed">
        A crypter bot is an engineering or program designed for a specific use
        <br />
        <br />
        This bot also uses various programming languages and has many features available. In the development stage, this bot is still in beta <br /> Chyper
        refuses the usual components of UX-UI design and embraces uncomfortable
        design elements, and it is more fearless to use distinctive color
        palettes.
        <br />
        <br />I created this collection of components for people who want to
        learn more about chyper style, and to help them get started with
        creating chyper layouts.
      </div>

      <Pagination
        next={{
          name: "Installation",
          path: "/docs/installation",
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
    </div>
  );
}
