"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { createDocument } from "@/lib/actions/room.actions";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const addDocumentHandler = async() => {
    try {
        const room = createDocument({userId, email})
    } catch (error) {
        console.log("Could not create a blank document", error)
    }
  };
  return (
    <Button
      type="submit"
      onClick={addDocumentHandler}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <Image
        src="/assets/icons/add.svg"
        alt="Add document"
        width={24}
        height={24}
      />
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  );
};

export default AddDocumentBtn;
