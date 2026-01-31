import React from "react";
import clickIcon from "../../../assets/icons/Group.png"
import messageBox from "../../../assets/icons/comments icon.png"




const Article = ({news}) => {
    const {img,name,des,} = news;
  return (
    <div>
      <article>
        <div
          className= "cardInfo rounded-none card bg-base-100 card-xs shadow-sm"
        >
          <figure
            className= "me-0.5">
            <img src={img} alt="best doctors" />
          </figure>
          <div className="card-body mt-4">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src={clickIcon} alt="clock"/>
                <p className="ms-1">10 sep, 2021</p>
              </div>
              <div className="flex items-center">
                <img src={messageBox} alt="clock"/>
                <p className="ms-1">3 Comments</p>
              </div>
            </div>
            <h2 className="text-lg font-semibold ">{name.slice(0,60)}</h2>
            <p className="text-neutral">{des}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Article;
