import Link from "next/link";
import { motion } from "framer-motion";
import { Headset } from "phosphor-react";

export default function Apresentation() {
  return (
    <section>
      <div className="w-full h-screen flex items-center justify-center flex-col text-white">
        <div className="flex flex-row gap-4 mb-4 justify-center items-center">
          <p>DJ Pedrinho</p>
          <Headset size={32} />
        </div>
        <div className="flex justify-center items-center text-6xl">
          <motion.span whileHover={{ x: 10 }}> V </motion.span>
          <motion.span whileHover={{ x: 10 }}> I </motion.span>
          <motion.span whileHover={{ x: 10 }}> R </motion.span>
          <motion.span whileHover={{ x: 10 }}> T </motion.span>
          <motion.span whileHover={{ x: 10 }}> U </motion.span>
          <motion.span whileHover={{ x: 10 }}> A </motion.span>
          <motion.span whileHover={{ x: 10 }}> L </motion.span>
          <motion.span className="mx-2" />
          <motion.span whileHover={{ x: 10 }}> S </motion.span>
          <motion.span whileHover={{ x: 10 }}> O </motion.span>
          <motion.span whileHover={{ x: 10 }}> U </motion.span>
          <motion.span whileHover={{ x: 10 }}> N </motion.span>
          <motion.span whileHover={{ x: 10 }}> D </motion.span>
        </div>
        <p>Som, dj, iluminção e telão - para sua festa!</p>
        <p className="mt-4">
          Faça seu orçamento pelo
          <Link className="underline cursor-pointer ml-2" href="https://wa.me/5511984399307">
            whatsapp
          </Link>
        </p>
      </div>
    </section>
  );
}
