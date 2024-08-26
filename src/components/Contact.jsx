import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-b-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 dark:text-neutral-300"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 dark:text-neutral-300"
        >
          <a href="https://wa.me/+6285851816241" target="_blank">Whatsapp : {" "}
          {CONTACT.phoneNo}
          </a>
        </motion.p>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDzggPZPppddbDcBTNpkZlPVhKdcJsjnhxThZJPKSSfNZLWkrmBKWNHLdCqZqRHxWmpn" className="border-b dark:text-neutral-300" target="_blank">Email : {" "}
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
