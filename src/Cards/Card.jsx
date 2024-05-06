import React, { useState, useEffect } from 'react';
import "./Card.css";

import AOS from "aos";
import "aos/dist/aos.css";


function Card() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Define card data
  const cardData = [
    {
      title: "Financial Law",
      content:
        "Financial law regulates economy, prevents crises, and minimizes financial issues through legislation, oversight, and enforcement on national or global scale.",
      imageUrl: "https://i.ibb.co/Gv41SHk/1.jpg",
    },
    {
      title: "Arbitration Law",
      content:
        "Handles disputes outside court system, often involving businesses or individuals seeking to resolve conflicts through alternative dispute resolution methods.",
      imageUrl: "https://i.ibb.co/F8sc3kB/2.jpg",
    },

    {
      title: "Divorce Law (Family Law)",
      content:
        "Deals with legal matters related to dissolution of marriage, including child custody, alimony, division of assets, and child support.",
      imageUrl: "https://i.ibb.co/cYkxr5F/3.jpg",
    },

    {
      title: "Marriage Law",
      content:
        "Covers legal aspects related to marriage contracts, marital rights, responsibilities, and legal issues surrounding marital status and obligations.",
      imageUrl: "https://i.ibb.co/XpJs4CV/4.jpg",
    },

    {
      title: "Criminal Law",
      content:
        "Represents individuals accused of committing crimes and works to defend their rights in criminal proceedings, or prosecutes individuals accused of crimes.",
      imageUrl: "https://i.ibb.co/jMhcT4v/5.jpg",
    },

    {
      title: "Cheque Law (Banking Law)",
      content:
        "Deals with legal issues related to banking and finance, including regulations, transactions, disputes, and compliance matters.",
      imageUrl: "https://i.ibb.co/5509gZw/6.jpg",
    },

    {
      title: "Corporate Law",
      content:
        "Advises businesses on legal matters related to corporate governance, compliance, mergers and acquisitions, contracts, and intellectual property.",
      imageUrl: "https://i.ibb.co/Q9ykCzF/7.jpg",
    },

    {
      title: "Employment Law",
      content:
        "Handles legal matters related to the employer-employee relationship, including employment contracts, discrimination, harassment, and wrongful termination.",
      imageUrl: "https://i.ibb.co/wdvRPkf/8.jpg",
    },

    {
      title: "Real Estate Law",
      content:
        "Deals with legal issues related to property transactions, including buying and selling real estate, leases, property development, zoning regulations, and landlord-tenant disputes.",
      imageUrl: "https://i.ibb.co/pbvS8RT/9.jpg",
    },

    {
      title: "Immigration Law",
      content:
        "Assists individuals and businesses with legal matters related to immigration, citizenship, visas, green cards, deportation defense, asylum, and refugee status.",
      imageUrl: "https://i.ibb.co/t3c0F80/10.jpg",
    },

    {
      title: "Intellectual Property Law",
      content:
        "Protects the rights of individuals and businesses in their creative and innovative works, including patents, trademarks, copyrights, and trade secrets.",
      imageUrl: "https://i.ibb.co/C1N9LQq/11.jpg",
    },

    {
      title: "Environmental Law",
      content:
        "Deals with legal issues related to environmental regulations, protection of natural resources, pollution control, and sustainability.",
      imageUrl: "https://i.ibb.co/GMFW91K/12.jpg",
    },

    {
      title: "Health Law",
      content:
        "Addresses legal matters related to healthcare, including medical ethics, patient rights, healthcare policies, and regulations.",
      imageUrl: "https://i.ibb.co/5jNdDTj/13.jpg",
    },

    {
      title: "Tax Law",
      content:
        "Handles legal issues related to taxation, tax planning, tax disputes, and compliance with tax laws and regulations.",
      imageUrl: "https://i.ibb.co/gP27P7n/14.jpg",
    },

    {
      title: "Entertainment Law",
      content:
        "Deals with legal issues in the entertainment industry, including contracts, intellectual property rights, royalties, and licensing agreements.",
      imageUrl: "https://i.ibb.co/mCJCr9Q/15.jpg",
    },

    {
      title: "Civil Rights Law",
      content:
        "Focuses on protecting individuals' rights against discrimination, infringement, and violations of civil liberties and freedoms.",
      imageUrl: "https://i.ibb.co/K65RVX5/16.jpg",
    },

    {
      title: "Personal Injury Law",
      content:
        "Represents individuals injured as a result of another party's negligence or wrongdoing in seeking compensation for damages and losses.",
      imageUrl: "https://i.ibb.co/p15G7Xd/17.jpg",
    },

    {
      title: "Trusts and Estates Law",
      content:
        "Covers legal aspects related to wills, trusts, inheritance, estate planning, and administration of estates.",
      imageUrl: "https://i.ibb.co/nn4sXwG/18.jpg" ,
    },


    {
      title: "Constitutional Law",
      content:
        "Addresses legal issues related to interpretation and application of a country's constitution, including constitutional rights and limitations.",
      imageUrl: "https://i.ibb.co/4pQ40tM/19.jpg",
    },

    // Add more card data as needed
  ];

  // Define state for card toggles
  const [expandedCards, setExpandedCards] = useState([]);

  // Function to toggle card
  const toggleCard = (index) => {
    setExpandedCards((prevState) => {
      if (prevState.includes(index)) {
        return prevState.filter((item) => item !== index);
      } else {
        return [...prevState, index];
      }
    });
  };

  return (
    <div>
      <h1 style={{ fontSize: "30px" }} className="heading" data-aos='zoom-in'>
        We Are Expert At:
      </h1>
      <div className="Card_container_main" data-aos='zoom-in'>
        {cardData.map((card, index) => (
          <div
            data-aos='zoom-in'
            className="all_cards"
            key={index}
            onClick={() => toggleCard(index)}
          >
            <ul
              className={`container box ${
                expandedCards.includes(index)
                  ? "card_main_cont_toggle"
                  : "card_main_cont"
              }`}
              id={`box_${index}`}
            >
              <li className="card_not_extend" id={`box_${index}_1`}>
                <label className="card_label" htmlFor="card_title">
                  {card.title}
                </label>
                <span className="material-symbols-outlined card_add">add</span>
              </li>
              <li
                className={`${
                  expandedCards.includes(index)
                    ? "card_extend_toggle"
                    : "card_extend"
                }`}
                id={`card_addition_${index}`}
              >
                <img className="card_image" src={card.imageUrl} alt="" />
                <p className="card_content">{card.content}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
