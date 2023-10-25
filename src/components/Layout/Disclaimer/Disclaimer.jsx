import React from "react";

const Disclaimer = ({ value }) => {
  const { theme } = value;

  return (
    <div
      className={`flex flex-col items-center font-['Lato'] text-center gap-8 mt-24 ${
        theme ? "text-white" : "text-black"
      }`}
    >
      <h1 className="text-2xl lg:text-[40px]">Disclaimer</h1>
      <p className="text-sm lg:text-lg max-w-[333px] lg:max-w-[814px]">
        Although SCADS algorithm GUARANTEES THAT SCADS IS A STABLE COIN, AND
        THAT LAVISH is A LINEAR TRUST TOKEN with constant growth rate with each
        LAVISH minted. SCADS do not warrant failure of global internet or
        nuclear war, or users not keeping their passwords or seed phrases safe.
        Markets do not affect the algorithm, nor inflation or recession. The
        SCADS algorithm is self-maintained, self-sufficient, self-sustained,
        with full autonomy. Once it’s launched, it cannot be modified. Only the
        front end may be updated. Knowing that till now no real regulations are
        set or clear worldwide, SCADS operate as a decentralized algorithm, and
        have no control whatsoever on jurisdictions from where its clients
        operate, SCADS urge all its users to verify legislations each in his own
        country. SCADS is not liable for any breach of usage by users.
      </p>
    </div>
  );
};

export default Disclaimer;
