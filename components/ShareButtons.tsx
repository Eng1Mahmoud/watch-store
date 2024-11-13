import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  XIcon,
  WhatsappIcon,
} from "react-share";
import { IoMdShare } from "react-icons/io";

interface ShareButtonsProps {
  title: string;
  productId: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, productId }) => {
  const { locale } = useParams();
  const url = `https://online-watch-store.vercel.app/${locale}/shop/${productId}`;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative p-2 bg-white dark:bg-dark-bgSection dark:shadow-dark rounded-full z-[1000]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-[18px] text-main-main"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <IoMdShare className="dark:text-dark-text" />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-[-30px] mt-2 bg-white dark:bg-dark-bgSection shadow-md dark:shadow-dark rounded-md p-2 flex gap-2"
          >
            <ul className="flex flex-col gap-2">
              {[
                { Button: FacebookShareButton, Icon: FacebookIcon },
                { Button: TwitterShareButton, Icon: XIcon },
                { Button: WhatsappShareButton, Icon: WhatsappIcon },
              ].map(({ Button, Icon }, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button url={url} title={title}>
                    <Icon size={32} round />
                  </Button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareButtons;
