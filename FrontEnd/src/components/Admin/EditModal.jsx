import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import useProducts from "../../Hook/UseProducts";
import ReactLoading from "react-loading";

export default function EditModal({ setProductsData,fetchProductForAdmin, product }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [image, setImage] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { loading, editProduct, fetchProducts } = useProducts();

  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(null); 
  }, [product]);

  const handleEditProduct = async (onClose) => {
    const formData = new FormData();
    formData.append('id', product.id);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    await editProduct(formData, product.id);
    await fetchProductForAdmin(setProductsData)
    onClose();
  };

  return (
    <>
      <Button onPress={onOpen}>Edit Product</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Product
              </ModalHeader>
              <ModalBody>
                <label htmlFor="name">Product Name:</label>
                <input
                  className="border border-black rounded-md"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="price">Product Price:</label>
                <input
                  className="border border-black rounded-md"
                  type="number"
                  id="price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <label htmlFor="description">Product Description:</label>
                <textarea
                  className="border border-black rounded-md"
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <label htmlFor="image">Product Image:</label>
                <input
                  className="border border-black rounded-md"
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button onClick={() => handleEditProduct(onClose)} color="primary">
                  {loading ? (
                    <ReactLoading
                      type="spin"
                      color="white"
                      height={20}
                      width={20}
                    />
                  ) : (
                    "Save"
                  )}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
