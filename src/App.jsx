import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Wishlist from "./pages/Wishlist";
import Sidebar from "./components/Sidebar";
import Pagination from "./pages/Pagination";
import ErrorPage from "./pages/ErrorPage";
import { Toaster } from "sonner";

export default function App() {
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
    fuel: "",
    seats: "",
  });

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar - visible on all viewports */}
      <div className="md:hidden block w-full">
        <Sidebar filters={filters} setFilters={setFilters} />
      </div>

      <div className="hidden md:block w-3/12">
        <Sidebar filters={filters} setFilters={setFilters} />
      </div>

      {/* Main Content */}
      <Toaster richColors position="top-right" />
      <div className="w-full md:w-9/12 p-4 pt-[72px] md:pt-4 relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Pagination filters={filters} setFilters={setFilters}/>} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}
  