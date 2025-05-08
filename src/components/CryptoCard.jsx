import React from "react";

const CryptoCard = ({ image, name, price }) => {
    return (
        <div className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all ease-in-out duration-300 flex flex-col items-center border border-gray-300">
            <div className="mb-4 w-full text-center bg-blue-100 py-3 rounded-2xl shadow-inner">
                <h2 className="text-2xl font-bold text-blue-800 uppercase truncate">{name}</h2>
            </div>
            <img
                src={image}
                alt={name}
                className="w-28 h-28 object-contain mb-6"
            />
            <div className="mt-auto">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-lg font-semibold rounded-full shadow-md">
                    ${price.toLocaleString()}
                </span>
            </div>
        </div>
    );
};

export default CryptoCard;






