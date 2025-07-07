import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const PurchaseModal = ({ closeModal, isOpen, plant }) => {
  const { user } = useAuth();
   const { name, category, quantity, price, _id, seller, image } = plant || {}

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const [orderData, setOrderData] = useState({
    seller,
    plantId: _id,
    quantity: 1,
    price: price,
    plantName: name,
    plantCategory: category,
    plantImage: image,
  })

  useEffect(() => {
    if (user)
      setOrderData(prev => {
        return {
          ...prev,
          customer: {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
          },
        }
      })
  }, [user])

  const handleQuantity = value => {
    const totalQuantity = parseInt(value)
    if (totalQuantity > quantity)
      return toast.error('You cannot purchase more.')
    const calculatedPrice = totalQuantity * price
    setSelectedQuantity(totalQuantity)
    setTotalPrice(calculatedPrice)

    setOrderData(prev => {
      return {
        ...prev,
        price: calculatedPrice,
        quantity: totalQuantity,
      }
    })
  }

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md bg-white p-6 backdrop-blur-2xl shadow-xl rounded-2xl transition duration-300 ease-out">
            <DialogTitle
              as="h3"
              className="text-lg font-medium text-center text-gray-900"
            >
              Review Info Before Purchase
            </DialogTitle>

            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p><strong>Plant:</strong> {name}</p>
              <p><strong>Category:</strong> {category}</p>
              <p><strong>Customer:</strong> {user?.displayName || "N/A"}</p>
              <p><strong>Unit Price:</strong> ${price}</p>
              <p><strong>Available Quantity:</strong> {quantity}</p>
            </div>

            <hr className="my-4" />

            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-600">
                Select Quantity
              </label>
              <input
                value={selectedQuantity}
                onChange={(e) => handleQuantity(e.target.value)}
                type="number"
                min={1}
                max={quantity}
                className="input input-bordered w-full"
              />
              <p className="text-sm">
                <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
              </p>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default PurchaseModal;
