import { useState, useRef, useEffect } from 'react';

export interface DropdownProps {
    val: string
    setVal?: React.Dispatch<React.SetStateAction<string>>;
}
const Dropdown = (props: DropdownProps)=> {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {props.val}
          <svg
            className="w-5 h-5 ml-2 -mr-1 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 
              4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => props.setVal?.("Kmeans clustering")}
            >
              Kmeans clustering
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => props.setVal?.("finite automata")}
            >
              finite automata
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => props.setVal?.("genetic algorithm")}
            >
              genetic algorithm
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;