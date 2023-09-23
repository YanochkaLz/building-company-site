import React from "react";
import arena from '../../assets/images/project.png'

const Card = () => {
  return (
    <div className="card">
      <img className="card-img" src={arena} alt="Arena" />
      <div className="red-block"></div>
      <h4 className="card-title">Арена</h4>
      <p className="card-desc">
        Мы сделали самую красивую арену в Европе. Это открытие стало для нас
        прорывной точкой для разивтия на следующие десятилетия. Мы очень рады
        данному еву.
      </p>
    </div>
  );
};

export default Card;
