import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import mockData from "../data/mockData";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useFilter } from "@/context/FilterContext";

const Pagination = () => {
  const { filters } = useFilter();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const carsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const filteredCars = mockData.filter((car) => {
    return (
      (!filters.brand || car.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
      (!filters.price || car.price <= parseInt(filters.price)) &&
      (!filters.fuelType || car.fuelType === filters.fuelType) &&
      (!filters.seatCapacity || car.seatCapacity === parseInt(filters.seatCapacity))
    );
  });

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const handleViewDetails = (id) => {
    navigate(`/car/${id}`);
  };

  return (
    <div
      className="flex min-h-screen"
      style={{
        fontFamily: 'var(--font-main)',
        backgroundColor: 'var(--color-light)',
        color: 'var(--color-dark)',
      }}
    >
      {/* <Sidebar /> */}
      <div className="w-full p-4">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--color-primary)' }}>
          Available Cars
        </h2>

        {currentCars.length === 0 ? (
          <p className="text-center text-gray-500">No cars match the selected filters.</p>
        ) : (
          <>
            {/* Table View */}
            <div className="hidden md:block">
              <div
                className="rounded-lg border shadow-sm"
                style={{
                  backgroundColor: 'var(--color-light)',
                  borderColor: 'var(--color-accent)',
                }}
              >
                <table className="w-full min-w-[800px] text-sm text-left">
                  <thead
                    style={{
                      backgroundColor: 'var(--color-accent)',
                      color: 'var(--color-secondary)',
                    }}
                  >
                    <tr>
                      <th className="w-[40px] px-2 py-3">#</th>
                      <th className="w-[150px] px-2 py-3">Brand</th>
                      <th className="w-[180px] px-2 py-3">Model</th>
                      <th className="w-[120px] px-2 py-3">Fuel</th>
                      <th className="w-[100px] px-2 py-3">Seats</th>
                      <th className="w-[170px] px-2 py-3">Price</th>
                      <th className="px-2 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentCars.map((car, index) => (
                      <tr
                        key={car.id}
                        className="border-t"
                        style={{ borderColor: 'var(--color-accent)' }}
                      >
                        <td className="px-2 py-2">{indexOfFirstCar + index + 1}</td>
                        <td className="px-2 py-2 font-medium">{car.brand}</td>
                        <td className="px-2 py-2">{car.model}</td>
                        <td className="px-2 py-2">{car.fuelType}</td>
                        <td className="px-2 py-2">{car.seatCapacity}</td>
                        <td className="px-2 py-2">₹{car.price.toLocaleString()}</td>
                        <td className="px-2 py-2">
                          <Button
                            size="sm"
                            className="bg-[var(--color-primary)] hover:bg-orange-600 text-white"
                            onClick={() => handleViewDetails(car.id)}
                          >
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="block md:hidden space-y-4">
              {currentCars.map((car, index) => (
                <div
                  key={car.id}
                  className="p-4 rounded-lg shadow-sm border"
                  style={{
                    backgroundColor: 'var(--color-light)',
                    borderColor: 'var(--color-accent)',
                  }}
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {car.brand} | {car.model}
                  </h3>
                  <p className="text-sm">Fuel: {car.fuelType}</p>
                  <p className="text-sm">Seats: {car.seatCapacity}</p>
                  <p className="text-sm mb-2">Price: ₹{car.price.toLocaleString()}</p>
                  <Button
                    size="sm"
                    className="bg-[var(--color-primary)] hover:bg-orange-600 text-white"
                    onClick={() => handleViewDetails(car.id)}
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-4">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="text-sm pt-2 text-[var(--color-secondary)]">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
