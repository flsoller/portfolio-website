type ProjectFrame = {
  children: React.ReactNode;
};

export default function ProjectFrame(props: ProjectFrame) {
  const { children } = props;

  return (
    <div className="max-w-xl px-2">
      <div className="shadow-xl rounded-xl bg-gray-800">
        <div className="py-2 px-4 flex items-center space-x-5">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="border border-black border-opacity-5 rounded-lg shadow-sm bg-gray-100 w-full max-w-sm">
            <div className="flex items-center px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current text-gray-600"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
              <div className="px-1">github.com/flsoller</div>
            </div>
          </div>
        </div>
        <div className="px-2 pb-2">{children}</div>
      </div>
    </div>
  );
}
