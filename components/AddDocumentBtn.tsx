'use client'
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
    const addDocumentHandler = ()=>{

    }
  return (
    <Button type="submit" onClick={addDocumentHandler}>
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
