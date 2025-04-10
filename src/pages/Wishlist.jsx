// import { useWishlist } from "@/context/WishlistContext";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { toast } from "sonner";
// import {
//   AlertDialog,
//   AlertDialogTrigger,
//   AlertDialogContent,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogCancel,
//   AlertDialogAction,
// } from "@/components/ui/alert-dialog";

// export default function Wishlist() {
//   const { wishlist, removeFromWishlist } = useWishlist();

//   const handleRemoveConfirmed = (id, model) => {
//     removeFromWishlist(id);
//     toast.success(`${model} has been removed from your wishlist.`, {
//       duration: 3000,
//       style: {
//         background: "var(--color-primary)",
//         color: "#fff",
//         fontWeight: "bold",
//       },
//     });
//   };
  

//   if (wishlist.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-[var(--color-primary)] bg-[var(--color-light)]">
//         Your wishlist is empty.
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 md:p-10 bg-[var(--color-light)] min-h-screen mt-14">
//       <h2 className="text-3xl font-bold mb-8 text-[var(--color-primary)] text-center">
//         Your Wishlist
//       </h2>

//       <div className="space-y-6 max-w-5xl mx-auto">
//         {wishlist.map((car) => (
//           <div
//             key={car.id}
//             className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-[var(--color-primary)] shadow-sm bg-[var(--color-accent)]"
//           >
//             <div className="md:w-[200px]">
//               <img
//                 src={car.image}
//                 alt={`${car.brand} ${car.model}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="md:w-2/3 p-6 flex flex-col justify-between gap-3">
//               <div>
//                 <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">
//                   {car.brand} <span className="text-[var(--color-secondary)]">|</span> {car.model}
//                 </h3>
//                 <p className="text-[var(--color-secondary)] text-sm">
//                   <span className="font-semibold">Price:</span> ₹{car.price.toLocaleString()}
//                 </p>
//                 <p className="text-[var(--color-secondary)] text-sm">
//                   <span className="font-semibold">Fuel:</span> {car.fuelType} | 
//                   <span className="ml-2 font-semibold">Mileage:</span> {car.mileage} miles
//                 </p>
//                 <p className="text-[var(--color-secondary)] text-sm">
//                   <span className="font-semibold">Engine:</span> {car.engine}
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-4 mt-4">
//                 {/* Remove Button with Alert Dialog */}
//                 <AlertDialog>
//                   <AlertDialogTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-light)] hover:text-[var(--color-dark)]"
//                     >
//                       Remove
//                     </Button>
//                   </AlertDialogTrigger>
//                   <AlertDialogContent className="bg-[var(--color-light)] text-[var(--color-dark)] border border-[var(--color-primary)] shadow-lg">
//                     <AlertDialogHeader>
//                       <AlertDialogTitle>Are you sure?</AlertDialogTitle>
//                       <AlertDialogDescription>
//                         This will remove <span className="font-semibold">{car.model}</span> from your wishlist.
//                       </AlertDialogDescription>
//                     </AlertDialogHeader>
//                     <AlertDialogFooter>
//                       <AlertDialogCancel className="hover:bg-[var(--color-accent)] cursor-pointer">
//                         Cancel
//                       </AlertDialogCancel>
//                       <AlertDialogAction
//                         onClick={() => handleRemoveConfirmed(car.id, car.model)}
//                         className="bg-[var(--color-primary)] text-white hover:opacity-90 cursor-pointer"
//                       >
//                         Yes, Remove
//                       </AlertDialogAction>
//                     </AlertDialogFooter>
//                   </AlertDialogContent>
//                 </AlertDialog>

//                 {/* View Details Button */}
//                 <Link to={`/car/${car.id}`}>
//                   <Button
//                     variant="outline"
//                     className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-light)] hover:text-[var(--color-dark)]"
//                   >
//                     View Details
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { useWishlist } from "@/context/WishlistContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
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

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleRemoveConfirmed = (id, model) => {
    removeFromWishlist(id);
    toast.success(`${model} has been removed from your wishlist.`, {
      duration: 3000,
      style: {
        background: "var(--color-primary)",
        color: "#fff",
        fontWeight: "bold",
      },
    });
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-[var(--color-primary)] bg-[var(--color-light)]">
        Your wishlist is empty.
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 bg-[var(--color-light)] min-h-screen mt-14">
      <h2 className="text-3xl font-bold mb-8 text-[var(--color-primary)] text-center">
        Your Wishlist
      </h2>

      <div className="space-y-6 max-w-5xl mx-auto">
        {wishlist.map((car) => (
          <div
            key={car.id}
            className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-[var(--color-primary)] shadow-sm bg-[var(--color-accent)]"
          >
            <div className="md:w-[200px]">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-2/3 p-6 flex flex-col justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">
                  {car.brand} <span className="text-[var(--color-secondary)]">|</span> {car.model}
                </h3>
                <p className="text-[var(--color-secondary)] text-sm">
                  <span className="font-semibold">Price:</span> ₹{car.price.toLocaleString()}
                </p>
                <p className="text-[var(--color-secondary)] text-sm">
                  <span className="font-semibold">Fuel:</span> {car.fuelType} | 
                  <span className="ml-2 font-semibold">Mileage:</span> {car.mileage} miles
                </p>
                <p className="text-[var(--color-secondary)] text-sm">
                  <span className="font-semibold">Engine:</span> {car.engine}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-light)] hover:text-[var(--color-dark)]"
                    >
                      Remove
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-[var(--color-light)] text-[var(--color-dark)] border border-[var(--color-primary)] shadow-lg">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will remove <span className="font-semibold">{car.model}</span> from your wishlist.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="hover:bg-[var(--color-accent)] cursor-pointer">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleRemoveConfirmed(car.id, car.model)}
                        className="bg-[var(--color-primary)] text-white hover:opacity-90 cursor-pointer"
                      >
                        Yes, Remove
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <Link to={`/car/${car.id}`}>
                  <Button
                    variant="outline"
                    className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-light)] hover:text-[var(--color-dark)]"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
