import React, { useState } from "react";
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

export default function AddModal({setProductsData,fetchProductForAdmin}) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { loading, addProduct ,fetchProducts } = useProducts();

  const handleAddProduct = async (onClose) => {
    const product = await addProduct({
      name,
      price,
      description,
      image,
    });

    
  await fetchProductForAdmin(setProductsData);
  onClose();
  
  };

  return (
    <>
      <Button onPress={onOpen}>Add Product</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Product
              </ModalHeader>
              <ModalBody>
                <label htmlFor="name">Product Name:</label>
                <input
                  className="border border-black  rounded-md"
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="price">Product Price:</label>
                <input
                  className="border border-black  rounded-md"
                  type="number"
                  id="price"
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                />

                <label htmlFor="description">Product Description:</label>
                <textarea
                  className="border border-black  rounded-md"
                  id="description"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <label htmlFor="image">Product Image:</label>
                <input
                  className="border border-black  rounded-md"
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
                <Button onClick={() => handleAddProduct(onClose)} color="primary">
                  {loading ? (
                    <ReactLoading
                      type="spin"
                      color="white"
                      height={20}
                      width={20}
                    />
                  ) : (
                    "Add"
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
