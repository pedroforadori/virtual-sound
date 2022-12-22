import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import dj from "../../public/assets/globo.gif";

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full h-screen bg-black p-4 text-white flex flex-col justify-center items-center">
      <Image
        src={dj}
        alt=""
        width={100}
        style={{ display: isOpen ? "block" : "none" }}
      />
      <ol className="rotate-[-90deg]">
        <motion.li
          whileHover={{
            rotate: 90,
            x: 90,
            scale: 4,
          }}
          whileTap={{
            rotate: 90,
            x: 90,
            scale: 3,
          }}
        >
          dj
        </motion.li>
        <motion.li
          whileHover={{
            rotate: 90,
            x: 90,
            scale: 5,
          }}
          whileTap={{
            rotate: 90,
            x: 90,
            scale: 3,
          }}
        >
          som
        </motion.li>
        <motion.li
          whileHover={{
            rotate: 90,
            x: 90,
            scale: 5,
          }}
          whileTap={{
            rotate: 90,
            x: 90,
            scale: 3,
          }}
        >
          telão
        </motion.li>
        <motion.li
          whileHover={{
            rotate: 90,
            x: 90,
            scale: 5,
          }}
          whileTap={{
            rotate: 90,
            x: 90,
            scale: 3,
          }}
        >
          karaoke
        </motion.li>
        <motion.li
          whileHover={{
            rotate: 90,
            x: 90,
            scale: 5,
          }}
          whileTap={{
            rotate: 90,
            x: 90,
            scale: 3,
          }}
        >
          iluminação
        </motion.li>
      </ol>
      <div className="w-full border border-white border-dashed" />
    </section>
  );
}
