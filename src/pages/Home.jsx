import { useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "@/components/ui/button";

const Home = ({ filters }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Banner Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl shadow-lg mb-6">
        <img
          src="/car_banner.png"
          alt="DriveFind Car Banner"
          className="w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/40">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Car with <span className="text-accent">DriveFind</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Explore cars from top brands, filtered to your needs. Fast. Simple. Beautiful.
          </p>
        </div>
      </section>

      {/* Explore Button BELOW the Banner */}
      <div className="text-center mt-4">
        <Button
          onClick={() => navigate("/cars")}
          className="text-lg px-6 py-3 rounded-xl shadow-md font-semibold cursor-pointer"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "white",
          }}
        >
         Explore Cars
        </Button>
      </div>
    </div>
  );
};

export default Home;
