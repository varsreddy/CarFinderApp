import { useParams } from "react-router-dom";
import mockData from "../data/mockData";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/context/WishlistContext";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function CarDetails() {
  const { id } = useParams();
  const car = mockData.find((c) => c.id === parseInt(id));
  const { wishlist, addToWishlist } = useWishlist();
  const alreadyInWishlist = wishlist.some((item) => item.id === car.id);

  if (!car) {
    return <div className="p-8 text-red-600">Car not found.</div>;
  }

  return (
    <div className="p-6 md:p-12 lg:p-16 bg-[var(--color-light)] min-h-screen mt-14 md:mt-0">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-auto rounded-xl shadow-md"
        />

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[var(--color-primary)]">
            {car.make} {car.model}
          </h1>

          <p className="text-lg text-[var(--color-secondary)]">
            <span className="font-semibold">Price:</span> ₹{car.price.toLocaleString()}
          </p>
          <p className="text-lg text-[var(--color-secondary)]">
            <span className="font-semibold">Fuel Type:</span> {car.fuelType}
          </p>
          <p className="text-lg text-[var(--color-secondary)]">
            <span className="font-semibold">Mileage:</span> {car.mileage} miles
          </p>
          <p className="text-lg text-[var(--color-secondary)]">
            <span className="font-semibold">Engine:</span> {car.engine}
          </p>
          <p className="text-lg text-[var(--color-secondary)]">
            <span className="font-semibold">Horsepower:</span> {car.horsepower} HP
          </p>
          <p className="text-lg text-[var(--color-secondary)]">
            <span className="font-semibold">Seating Capacity:</span> {car.seatCapacity}
          </p>
          <p className="text-lg text-[var(--color-secondary)]">
            <span className="font-semibold">Color:</span> {car.color}
          </p>

          {/* Wishlist Button */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                disabled={alreadyInWishlist}
                className={`mt-4 w-full sm:w-auto transition-colors duration-300 ${
                  alreadyInWishlist
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-light)] cursor-pointer"
                }`}
              >
                {alreadyInWishlist ? "Already in Wishlist" : "Add to Wishlist"}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[var(--color-light)] text-[var(--color-dark)]">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will add <span className="font-semibold">{car.model}</span> to your wishlist.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="hover:bg-[var(--color-accent)]">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => addToWishlist(car)}
                  className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-light)] "
                >
                  Yes, Add
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
