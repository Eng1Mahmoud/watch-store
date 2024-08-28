"use client";

import Input from "@/components/formik/Input";
import TextArea from "@/components/formik/TextArea";
import { motion } from "framer-motion";

const FormInputs = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-4">
        <div className="flex flex-col gap-3">
          <Input name="name" placeholder="Name" type="text" />
          <Input name="email" placeholder="Email" type="email" />
          <Input name="phoneNumber" placeholder="Phone" type="text" />
        </div>
        <div className="flex flex-col gap-3">
          <TextArea name="message" placeholder="Message" />
        </div>
      </div>
      <motion.button
        type="submit"
        className="btn btn-primary w-fit mt-8 block m-auto px-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Submit
      </motion.button>
    </motion.div>
  );
};

export default FormInputs;
