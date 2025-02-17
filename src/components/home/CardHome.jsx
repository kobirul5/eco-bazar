import React from 'react'

export default function CardHome({vegetable}) {
    return (
        <div className="card border">
            <figure className="px-10 pt-10">
                <img
                    src={vegetable?.strCategoryThumb}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
