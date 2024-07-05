import React from "react";

function Logo({ size = '50px' }) {
    return (
        <div style={{
            width: size,
            height: size,
            borderRadius: '50%', // Makes the div circular
            overflow: 'hidden', // Ensures the image does not overflow the circular boundary
        }}>
            <img 
                src="https://as1.ftcdn.net/v2/jpg/04/44/44/42/1000_F_444444251_vEpYXoE2bZnQGFbsbdtn36VKTQHOWA2T.jpg"
                style={{
                    width: '100%', // Ensures the image fills the circular div
                    height: 'auto' // Maintains aspect ratio
                }}
                alt="Logo"
            />
        </div>
    );
}

export default Logo;
