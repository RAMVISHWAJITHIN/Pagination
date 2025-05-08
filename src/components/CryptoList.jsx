import React from "react";
import CryptoCard from "./CryptoCard";

const CryptoList = ({ coinsData }) => {
    return (
        <div className="grid grid-cols-3 gap-8 mb-16 px-4">
            {coinsData.map((coin, index) => (
                <CryptoCard
                    key={`${coin.id}-${index}`}
                    image={coin.image}
                    name={coin.name}
                    price={coin.current_price}
                />
            ))}
        </div>
    );
};

export default CryptoList;







