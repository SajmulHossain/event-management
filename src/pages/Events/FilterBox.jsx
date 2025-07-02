import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const FilterBox = ({ setSearch, setTime }) => {
  const [newSearch, setNewSearch] = useState("");
  const [newTime, setNewTime] = useState("");

  const handleTimeChange = (e) => {
    setNewTime(e.target.value);
  };

  const handleClear = () => {
    setNewSearch("");
    setNewTime("");
  };

  const handleFilter = () => {
    setSearch(newSearch);
    setTime(newTime);
  };

  return (
    <>
      <div className="flex gap-2 flex-col max-w-xl mx-auto lg:max-w-full justify-center lg:flex-row mb-12">
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              onChange={(e) => setNewSearch(e.target.value)}
              value={newSearch}
            />
          </label>
        </div>

        <div>
          <div className="filter">
            <input
              onChange={handleTimeChange}
              className="btn filter-reset"
              type="radio"
              name="time"
              aria-label="All"
              value=""
              checked={newTime === ""}
            />
            <input
              onChange={handleTimeChange}
              className="btn"
              type="radio"
              name="time"
              aria-label="Today"
              value="today"
            />
            <input
              onChange={handleTimeChange}
              className="btn"
              type="radio"
              name="time"
              aria-label="This Week"
              value="this-week"
            />
            <input
              onChange={handleTimeChange}
              className="btn"
              type="radio"
              name="time"
              aria-label="Last Week"
              value="last-week"
            />
            <input
              onChange={handleTimeChange}
              className="btn"
              type="radio"
              name="time"
              aria-label="This Month"
              value="this-month"
            />
            <input
              onChange={handleTimeChange}
              className="btn"
              type="radio"
              name="time"
              aria-label="Last Month"
              value="last-month"
            />
          </div>
        </div>

        {/* <div>
          <label htmlFor="date">
            <FaCalendar />
          </label>
          <input
          id="date"
            type="date"
            className="hidden"
            onChange={(e) => setNewDate(e.target.value)}
          />
        </div> */}

        <div className="space-x-2">
          <button onClick={handleClear} className="btn btn-warning">
            Clear Filter <RxCross2 />
          </button>
          <button onClick={handleFilter} className="btn bg-sec text-white">
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterBox;
