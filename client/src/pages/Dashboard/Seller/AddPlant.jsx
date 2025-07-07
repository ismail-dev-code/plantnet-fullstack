import axios from "axios";
import AddPlantForm from "../../../components/Form/AddPlantForm";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const AddPlant = () => {
  const { user } = useAuth();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    const form = e.target;
    const name = form?.name?.value;
    const category = form?.category?.value;
    const description = form?.description?.value;
    const price = form?.price?.value;
    const quantity = form?.quantity?.value;

    if (!uploadedImage) {
      toast.error("Please upload an image before submitting.");
      setIsUploading(false);
      return;
    }

    try {
      const plantData = {
        name,
        category,
        description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        image: uploadedImage,
        seller: {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
        },
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-plant`,
        plantData
      );

      toast.success("Plant data added successfully!");
      form.reset();
      setUploadedImage(null);
      setImageUploadError(false);
      console.log(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add plant. Please try again later.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];

    if (!image) {
      toast.error("No image selected.");
      return;
    }

    try {
      // image url response from imgbb
      const imageUrl = await imageUpload(image);
      setUploadedImage(imageUrl);
      setImageUploadError(false);
      toast.success("Image uploaded successfully!");
    } catch (err) {
      setImageUploadError("Image upload failed.");
      toast.error("Image upload failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div>
      <AddPlantForm
        handleFormSubmit={handleFormSubmit}
        isUploading={isUploading}
        uploadedImage={uploadedImage}
        handleImageUpload={handleImageUpload}
        imageUploadError={imageUploadError}
      />
    </div>
  );
};

export default AddPlant;
