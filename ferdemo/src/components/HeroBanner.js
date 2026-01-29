import React from "react";

const HeroBanner = () => {
    return (
        <div
            className="container-fluid py-5 mb-4 shadow-sm"
            style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/hero-food.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                minHeight: '450px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div className="text-center">
                {/* Tên thương hiệu và Slogan tượng trưng */}
                <h1 className="display-3 fw-bold text-uppercase mb-3" style={{ letterSpacing: '2px' }}>
                    Thế Giới Ẩm Thực
                </h1>
                <p className="lead fs-2 mb-4">
                    Ngon chuẩn vị, giao tận nơi
                </p>

                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-warning btn-lg px-5 me-md-3 fw-bold shadow border-2 border-dark">
                        🔥HOT
                    </button>
                    <button className="btn btn-outline-light btn-lg px-5 fw-bold">
                        🎁Xem Ưu Đãi
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;