import React from "react";

const SteadyMindLogo = ({ size = 100 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
    >
        {/* Brain Shape (Minimalist) - Represents Focus and Cognitive Clarity */}
        <path
            d="M50 20C38 8 18 13 18 30C18 47 30 55 40 65C50 75 62 85 72 72C82 60 82 40 70 28C58 16 62 28 50 20Z"
            fill="#4F46E5"  /* Indigo-600 */
            fillOpacity="0.9"
            stroke="#3B3B98" /* Darker Indigo */
            strokeWidth="2"
        />

        {/* Lotus/Petal Symbol (Top) - Represents Mindfulness and Inner Peace */}
        <path
            d="M50 5C44 2 38 8 36 15C40 10 46 10 50 5Z"
            fill="#A78BFA"  /* Purple-300 */
            stroke="#7C3AED" /* Darker Purple */
            strokeWidth="1.5"
        />

        {/* Text (Optional) - Brand Name */}
        <text
            x="50"
            y="92"
            textAnchor="middle"
            fill="#1E293B"  /* Slate-800 */
            fontFamily="sans-serif"
            fontSize="14"
            fontWeight="bold"
        >
            SteadyMind
        </text>
    </svg>
);

export default SteadyMindLogo;