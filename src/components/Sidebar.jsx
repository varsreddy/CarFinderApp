// --- unchanged import section ---
import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useFilter } from "@/context/FilterContext";
import { useNavigate, Link } from "react-router-dom";

// --- unchanged theme initialization ---
if (typeof window !== "undefined") {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.classList.toggle("dark", savedTheme === "dark");
}

const Sidebar = () => {
  const { filters, setFilters } = useFilter();
  const [open, setOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState(filters);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    setTempFilters(filters);
  }, [filters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    setFilters(tempFilters);
    setOpen(false);
    navigate("/cars");
  };

  const handleClearFilters = () => {
    const cleared = { brand: "", price: "", fuelType: "", seatCapacity: "" };
    setTempFilters(cleared);
    setFilters(cleared);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <>
      {/* Mobile TopBar */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 fixed w-full z-50 shadow border-b border-gray-200 dark:border-gray-700 dark:bg-[var(--color-light)] bg-[var(--color-dark)]">
        <Link to="/" className="text-xl font-bold text-[var(--color-primary)]">
          🚗 DriveFind
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/wishlist"
            className="text-[var(--color-primary)] hover:scale-105 transition-transform"
          >
            <ShoppingCart size={22} />
          </Link>
          <button
            onClick={toggleTheme}
            className="text-[var(--color-primary)] hover:rotate-180 transition-transform"
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            {open ? (
              <X className="w-6 h-6 dark:text-[var(--color-dark)] text-[var(--color-light)]" />
            ) : (
              <Menu className="w-6 h-6 dark:text-[var(--color-dark)] text-[var(--color-light)]" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar Dropdown */}
      {open && (
        <div className="md:hidden fixed top-[60px] left-0 w-full p-4 z-40 bg-[var(--color-dark)] dark:bg-[var(--color-light)] border-b dark:border-gray-200 border-gray-700">
          <SidebarFilters
            filters={tempFilters}
            handleChange={handleChange}
            setFilters={setTempFilters}
            onApply={handleApplyFilters}
            onClear={handleClearFilters}
          />
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed top-0 left-0 w-3/12 lg:w-1/4 h-screen flex-col p-6 z-30 shadow-md dark:bg-[var(--color-light)] bg-[var(--color-dark)] dark:border-r border-gray-200 border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <Link to="/" className="text-2xl font-bold text-[var(--color-primary)]">
            🚗 DriveFind
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/wishlist"
              className="text-[var(--color-primary)] hover:scale-105 transition-transform"
            >
              <ShoppingCart size={22} />
            </Link>
            <button
              onClick={toggleTheme}
              className="text-[var(--color-primary)]"
            >
              {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>
        </div>

        <SidebarFilters
          filters={tempFilters}
          handleChange={handleChange}
          setFilters={setTempFilters}
          onApply={handleApplyFilters}
          onClear={handleClearFilters}
        />
      </div>
    </>
  );
};

const SidebarFilters = ({ filters, handleChange, setFilters, onApply, onClear }) => {
  const isFiltersEmpty =
    !filters.brand && !filters.price && !filters.fuelType && !filters.seatCapacity;

  const inputClasses =
    "dark:bg-[var(--color-accent)] dark:text-[var(--color-dark)] dark:placeholder:text-gray-600 border dark:border-gray-300 bg-[var(--color-secondary)] text-[var(--color-light)] placeholder:text-gray-400 border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:outline-none";

  const selectClasses =
    "dark:bg-[var(--color-accent)] dark:text-[var(--color-dark)] border dark:border-gray-300 bg-[var(--color-secondary)] text-[var(--color-light)] border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none";

  const labelClasses =
    "text-base font-semibold dark:text-[var(--color-dark)] text-[var(--color-light)]";

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="brand" className={labelClasses}>
          Brand
        </Label>
        <Input
          name="brand"
          value={filters.brand || ""}
          type="text"
          placeholder="e.g. Toyota"
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="price" className={labelClasses}>
          Max Price (₹)
        </Label>
        <Input
          type="number"
          name="price"
          value={filters.price || ""}
          min="0"
          placeholder="e.g. 10000"
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div className="space-y-1">
        <Label className={labelClasses}>Fuel Type</Label>
        <Select
          value={filters.fuelType || ""}
          onValueChange={(val) =>
            setFilters((prev) => ({ ...prev, fuelType: val }))
          }
        >
          <SelectTrigger className={selectClasses}>
            <SelectValue placeholder="Select Fuel Type" />
          </SelectTrigger>
          <SelectContent className="dark:bg-[var(--color-accent)] dark:text-[var(--color-dark)] bg-[var(--color-secondary)] text-[var(--color-light)]">
            <SelectItem value="Petrol">Petrol</SelectItem>
            <SelectItem value="Gasoline">Gasoline</SelectItem>
            <SelectItem value="Diesel">Diesel</SelectItem>
            <SelectItem value="Electric">Electric</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label className={labelClasses}>Seating Capacity</Label>
        <Select
          value={filters.seatCapacity || ""}
          onValueChange={(val) =>
            setFilters((prev) => ({ ...prev, seatCapacity: val }))
          }
        >
          <SelectTrigger className={selectClasses}>
            <SelectValue placeholder="Select Seats" />
          </SelectTrigger>
          <SelectContent className="dark:bg-[var(--color-accent)] dark:text-[var(--color-dark)] bg-[var(--color-secondary)] text-[var(--color-light)]">
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="6">6</SelectItem>
            <SelectItem value="7">7</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="pt-4">
        <Button
          disabled={isFiltersEmpty}
          className="w-full bg-[var(--color-primary)] text-white hover:bg-[#e6452a] transition-all duration-200 rounded-xl shadow-md"
          onClick={onApply}
        >
          Apply Filters
        </Button>
        <Button
          variant="outline"
          onClick={onClear}
          className="w-full mt-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 rounded-xl"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
