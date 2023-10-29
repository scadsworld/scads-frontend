import { motion } from "framer-motion";
import { opacityVariants } from "../../../database/variants";

const textOpacity = opacityVariants;

const Disclaimer = ({ value }) => {
  const { theme } = value;

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={textOpacity}
      className={`flex flex-col items-center font-['Lato'] text-center gap-8 mt-24 ${
        theme ? "text-[#B6B6B6]" : "text-black"
      }`}
    >
      <h1 className="text-2xl">Disclaimer</h1>
      <p className="text-sm max-w-[333px] lg:max-w-[814px]">
        While the SCADS algorithm guarantees the stability of SCADS as a stable
        coin and assures that LAVISH is a linear token with a constant growth
        rate for each minted LAVISH, it is important to note that SCADS cannot
        be held responsible for events such as global internet failure, nuclear
        war, or users not securely safeguarding their passwords or seed phrases.
        The algorithm remains impervious to market conditions, inflation, or
        recession. The SCADS algorithm is fully autonomous, self-maintained, and
        self-sufficient. Once launched, it is immutable and cannot be modified,
        with updates limited to the front end only. It operates within the
        framework of current global regulatory ambiguity, functioning as a
        decentralized algorithm. SCADS has no control over the jurisdiction from
        which its clients operate. As such, SCADS encourages all users to verify
        the legislation applicable in their respective countries. SCADS holds no
        liability for any breach of usage by users. It is strongly advised for
        users to "Do Your Own Research" (DYOR) before engaging in any
        transactions or investments within the SCADS ecosystem.
      </p>
    </motion.div>
  );
};

export default Disclaimer;
