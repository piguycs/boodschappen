import { NextPage } from "next";
import cardStyles from "../styles/Card.module.css";
import Image from "next/image";

const Card: NextPage = () => {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.container}>
        <img
          src="https://media.indebuurt.nl/zoetermeer/2018/06/31170759/action-logo.png"
          width={192}
          height={192}
          alt="shop"
        />
        <div>
          <h3>Hello</h3>
          Somerandomplaan 99 <br />
          Somecityveen <br />
          0000AA <br />
        </div>
      </div>
      <button>Shop Here</button>
    </div>
  );
};

export default Card;
