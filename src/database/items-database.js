import twitter from "../assets/twitter_logo 1.svg";
import telegram from "../assets/telegram_logo 1.svg";
import facebook from "../assets/facebook_logo 1.svg";
import instagram from "../assets/instagram_logo 1.svg";
import discord from "../assets/discord_logo 1.svg";
import github from "../assets/github_logo 1.svg";

export const navLinks = [
  {
    id: "n0",
    text: "Home",
    path: "/",
  },
  {
    id: "n1",
    text: "News",
    path: "/news",
  },
  {
    id: "n2",
    text: "Invest",
    path: "/invest",
  },
];

export const headerText = {
  title: `It Is Inevitable Decentralized & Dependable`,
  subTitle:
    "The Future of Stablecoins, the First PROOF OF HOLD (POH), Non Dollar Based",
  text: "Revolutionizing the concept of stable coins. Decentralized, self-sustained, automated without liabilities. The first PROOF OF HOLDING mechanism. Users only need to hodl in their own wallet to generate passive income. No staking, no liquidity pools. A true zero risk solution. Guaranteed growth. No owners, totally automated algorithm.",
};

// LIVE PRICES CONTENT
export const prices = [
  {
    id: "locked",
    price: "$1400.0",
    keyphrase_one: "Reserve",
    keyphrase_two: "Locked",
  },
  {
    id: "pulse",
    price: "$0.01",
    keyphrase_one: "Next",
    keyphrase_two: "Pulse",
  },
  {
    id: "market",
    price: "10118.44",
    keyphrase_one: "Total LAVISH In The",
    keyphrase_two: "Market",
  },
  {
    id: "increase",
    price: "$0.25",
    keyphrase_one: "LAVISH Price",
    keyphrase_two: "Increase",
  },
  {
    id: "Help",
    price: "$1000.25",
    keyphrase_one: "Total SCADS",
    keyphrase_two: "Held",
  },
];

export const predictabilityText = {
  title: "Embrace Predictability",
  text: "DeFi has experienced massive growth and adoption in the past 4 years. Today’s market cap of DeFI is 48 billion. However, the sector has also witnessed significant financial losses for investors due to the prevalence of fraudulent projects that enticed users with unrealistic APR/APY and other investment formulas. Many of these projects eventually pulled rug, resulting in a loss of funds. To address these weaknesses, an algorithmic solution was deemed necessary to detect patterns and provide effective solutions. As of now, there is a need for a strategic product that can help mitigate risks and prevent such fraudulent activities in the DeFi space.",
};

export const predictabilityCards = [
  {
    id: "c1",
    description: "A curved linear trust TOKEN",
    name: "LAVISH",
    duration: 0.5,
  },
  {
    id: "c2",
    description: "A stable COIN",
    name: "SCADS",
    duration: 0.7,
  },
  {
    id: "c3",
    description: "The beating heart of the SYSTEM",
    name: "PULSE",
    duration: 0.9,
  },
];

export const wallets = [
  {
    id: "w1",
    title: "SCADS",
    description:
      "Algorithmic stable coin, with point of reference to the USD (as the easiest popular denomination.) Not pegged.",
  },
  {
    id: "w2",
    title: "LAVISH",
    description:
      "LAVISH is a speculative token, which also functions as a linear TRUST token, providing constant price ",
  },
  {
    id: "w3",
    title: "PULSE",
    description:
      "Is a smart contract that performs daily operations within the algorithm It buys (SCADS), ",
  },
  {
    id: "w4",
    title: "SEIGNORAGE",
    description:
      "There is no system that can run without running cost. Witch entails decentralized anonymous servers.",
  },
  {
    id: "w5",
    title: "RESERVE",
    description:
      "RESERVE wallet  is different from all past reserve  concepts, can hold and lock SCADS and lavish",
  },
  {
    id: "w6",
    title: "TREASURY",
    description:
      "The wallet manages  all assets  circulation within the  algorithm, including  minting of new SCADS, ",
  },
];

export const tokenomicsHeaderText = {
  title: "Tokenomics",
  text: "SCADS algorithm is simple in strategy, it can never go bankrupt, it never needs funding. Once it is launched it sustains itself indefinitely.",
};

export const tokenomics = [
  {
    id: 0,
    text: "SCADS is an algorithmic stablecoin, its value referencing the USD for ease of use. It's important to note that SCADS is not pegged to the USD. It can only be minted when backed by collateral, specifically through the exchange of stablecoins for SCADS. This system operates independently, is characterized by fairness, and operates in a permissionless and fully decentralized manner. It continuously evolves within an automated, self-sustaining environment. Crucially, SCADS cannot be subject to seizure or freezing, as each user holds it in their own wallet. This ensures complete and genuine decentralized freedom and independence. It's worth emphasizing that SCADS has no owners who could be compelled to jeopardize users funds.",
    thumb: "SCADS",
  },
  {
    id: 1,
    text: `LAVISH is a speculative token that also functions as a linear token, ensuring steady price growth and granting an advantageous position for exclusive SCADS minting.`,
    bullet_one:
      "EXCLUSIVITY: Upon reaching a circulation supply of 5.5 million, LAVISH gains exclusive rights to purchase SCADS. This exclusivity feature presents the potential for significant price appreciation, making it an enticing choice for investors seeking higher returns. This status of exclusivity is effective for a duration of 5 years.",
    bullet_two:
      "THE CURVED LINEAR FACTOR: The value encapsulated within the token is determined by the number of minted LAVISH tokens. With each new LAVISH token minted, the price experiences a consistent increase of 0.0000001. ",
    thumb: "LAVISH",
  },

  {
    id: 2,
    text: "The market cap for LAVISH is defined by a lifetime supply of 21 million tokens. When the cap of 21 million tokens is reached, the calculated linear curved price for each LAVISH will be $2.10. However, it's important to note that the market demand price range for LAVISH is virtually limitless and will be determined by the level of demand in the market. This means that the price of LAVISH can potentially exceed the calculated $2.10 per token based on market dynamics and demand levels.",
    thumb: "MARKET CAP",
  },
  {
    id: 3,
    text: "As a fair algorithm, the minting speed is dynamically adjusted in response to the market capitalization of SCADS and the allocated time frame to reach the 21 million market cap. This adaptive approach ensures a balanced and equitable minting process within the ecosystem.",
    bullet_one:
      "Reward Speed Calculation: Minting Speed = (LAVISH < 21,000,000 LAVISH - LAVISH ALREADY MINTED>) / (SCADS <TOTAL SCADS IN THE MARKET> * TIME <IN MINUTES, 15 YEARS IN MINUTES - TIME ELAPSED SINCE THE BEGINNING>)",
    bullet_two:
      "Reward Amount Calculation: LAVISH Mint Amount = Hold SCADS Amount * Minting Speed * Difference in Time (in minutes)",
    bullet_three:
      "Function to Calculate Current Reward Speed: getCurrentRewardSpeed(): This function calculates the current minting speed. These formulas and functions are integral to the reward distribution mechanism within the algorithm. They ensure that rewards are distributed in a manner that aligns with the algorithm's design and objectives.",
    thumb: "MINTING SPEED",
  },
  {
    id: 4,
    text: "Is a smart contract that performs daily operations within the algorithm It buys (SCADS), mint (LAVISH), and sells (LAVISH) to (SCADS). It generates profits for the system and allocates them as follows: 80% goes back as a sinking fund increasing  its investment in the system, and 20% goes to the reserve locked (for life wallet) in (SCADS) currency, which strengthens the collateralization of (SACDS). While creating  a network effect due transacting  constantly. The self-sustaining network effect is  a first  that pioneers the algorithm  on another layer.",
    thumb: "PULSE",
  },
  {
    id: 5,
    text: "In contrast to conventional reserve systems employed by banks and exchanges, which often involve collateral comprised of various assets, bonds, and crypto holdings, all susceptible to market volatility and devaluation, and subject to third-party audits every six months, the SCADS reserve operates on an entirely different principle. The SCADS reserve exclusively relies on stable collateral within SCADS itself. This collateralization process leads to the creation of a guaranteed linear growth token in the form of LAVISH. This approach ensures a secure and controlled expansion of liquidity within the reserve wallet. Moreover, it is designed with the assurance that deficits should never occur, as users maintain direct control over their own funds within their respective wallets.",
    thumb: "RESERVE",
  },
  {
    id: 6,
    text: "The Treasury wallet oversees all asset circulation within the algorithm. This encompasses tasks such as minting new SCADS, holding stablecoins for users who wish to withdraw, and minting Lavish tokens to enhance liquidity value within the Treasury. Essentially, it plays a central role in managing the financial operations of the algorithm, ensuring its smooth operation and stability.",
    thumb: "TREASURY",
  },
  {
    id: 7,
    text: "The algorithm operates in a permissionless, completely decentralized, and independent manner. There are no admin keys or owners, the system functions autonomously through interactions between contracts, without any human intervention. Upon launch, the Algorithm will have admin keys enabled for 3 month, allowing for potential fixes if necessary. However, during this access period, admins will have no access to contracts. Following this initial period, public admin keys will be burned, making them visible to all users. After the burning, developers will only have access to the front end for UI/UX improvements, ensuring that the core functionality remains decentralized and secure. The algorithm is immutable; it cannot be modified, updated, or changed. Any new venture or addition would need to be implemented as an added Layer 2. This emphasizes the unalterable nature of the algorithm's core functionality.",
    thumb: "DECENTRILIZATION",
  },
  {
    id: 8,
    text: "With a primary focus on the security and well-being of all users, SCADS, functioning as a stable coin, is inherently resistant to price manipulation. Additionally, the SCADS ecosystem has implemented a limited set of rules designed to ensure the safety of both the system and its participants:",
    bullet_one:
      "With a primary focus on the security and well-being of all users, SCADS, functioning as a stable coin, is inherently resistant to price manipulation. Additionally, the SCADS ecosystem has implemented a limited set of rules designed to ensure the safety of both the system and its participants:",
    bullet_two: "2.	A cap of 50,000 SCADS on withdrawals per day.",
    bullet_three:
      "3.	Should a user require immediate access to their full capital, SCADS, being a stable asset, can be employed as a high-quality collateral for obtaining loans or bridge funding from various platforms.",
    text_two:
      "These rules act as safeguards, fortifying the algorithm against sudden fund withdrawals or potential manipulation. They are structured to maintain the stability and integrity of the system for all participants.",
    thumb: "PROTECTION",
  },
  {
    id: 9,
    text: "Every system requires operational costs, which in this case, include decentralized anonymous servers. These servers serve critical functions such as acting as data nodes, providing redundancy, managing system flow, ensuring security, and preventing congestion. To sustain these essential services, a tax of 1.77 % per transaction has been established. This tax contributes to the continuous and smooth operation of the system, enabling it to meet its objectives effectively. AS for exchanges . The minimum order is 100k  SCADS.",
    thumb: "SEIGNORAGE",
  },
  {
    id: 10,
    text: "Every transaction conducted within the system is capable of being verified on the blockchain. In addition, the SCADS algorithm provides real-time tracking of all contract transactions, which are conveniently listed in the contract list. Users have accessible and immediate viewing of this information on the main page, ensuring transparency and ease of access to all participants. This emphasis on transparency enhances trust and confidence within the system.",
    thumb: "TRANSPARENCY",
  },
  {
    id: 11,
    text: `SCADS introduces an innovative concept called Proof of Hold (POH) to ensure safety, security, and minimize investment risks. This approach involves users simply purchasing the stable coin and holding it. By doing so, they automatically mint LAVISH, the linear trust token. To facilitate this process, the algorithm incorporates a mapping feature called "isHolder" to monitor addresses that qualify as holders. The "ProofOfHolding" function enables an address to include itself in this list, allowing for seamless participation in the Proof of Hold mechanism. This inventive approach provides a secure and risk-reduced investment experience for users.`,
    thumb: "Proof of Hold (POH)",
  },
];

export const social_icons = [
  {
    id: "i1",
    icon: twitter,
  },
  {
    id: "i2",
    icon: telegram,
  },
  {
    id: "i3",
    icon: facebook,
  },
  {
    id: "i4",
    icon: instagram,
  },
  {
    id: "i5",
    icon: discord,
  },
  {
    id: "i6",
    icon: github,
  },
];
