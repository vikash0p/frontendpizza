'use client'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const offices = [
  {
    title: "Our Head Office",
    description:
      "Hendrerit gravida rutrum quisque non tellus. Elementum nisi quis eleifend quam adipiscing.",
    address: "No: 58 A, East Madison Street, Baltimore, MD, USA 4508",
    phone: "+000-123456789",
  },
  {
    title: "Branch Office",
    description:
      "Dui faucibus in ornare quam viverra orci. Ac placerat vestibulum lectus mauris.",
    address: "25 Ronald Crescent, Queensland",
    email: "Contact@example.com",
  },
  {
    title: "Customer Support",
    description:
      "Elit eget gravida cum sociis natoque penatibus et magnis dis.",
    email: "support@example.com",
    phone: "+123-456-7890",
  },
  {
    title: "Corporate Office",
    description:
      "Fusce id velit ut tortor pretium viverra suspendisse potenti.",
    address: "456 Elm Street, Springfield, USA",
    phone: "+987-654-3210",
  },
];

export default function ReachUs() {
  return (
    <section className="mt-12 bg-bgColor2 p-8">
      <h2 className="text-2xl font-bold mb-6">Reach Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {offices.map((office, index) => (
          <div key={index} className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-textColor text-2xl" />
            <div>
              <h3 className="text-lg font-bold">{office.title}</h3>
              <p className="text-sm mb-2">{office.description}</p>
              {office.address && (
                <p className="flex items-center space-x-2 mb-2">
                  <FaMapMarkerAlt />
                  <span>{office.address}</span>
                </p>
              )}
              {office.phone && (
                <p className="flex items-center space-x-2 mb-2">
                  <FaPhoneAlt />
                  <span>{office.phone}</span>
                </p>
              )}
              {office.email && (
                <p className="flex items-center space-x-2">
                  <FaEnvelope />
                  <span>{office.email}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
