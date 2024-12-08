import ContactForm from "@/components/ContactComponents/ContactForm";
import React from "react";
import { Metadata } from "next";
import { contactMetadata } from "@/utils/meta/contactMetadata";

export const metadata: Metadata = contactMetadata;

const Contact = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
