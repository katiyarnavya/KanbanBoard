import React from "react";

const Avatar = ({ name, size = 18, textColor = "#FFFFFF" }) => {
    const getColorFromName = (fullName) => {
        let hash = 0;
        for (let i = 0; i < fullName.length; i++) {
            hash = fullName.charCodeAt(i) + ((hash << 5) - hash); // Generate a hash
        }
        const color = `#${((hash >> 24) & 0xff).toString(16).padStart(2, "0")}${(
            (hash >> 16) &
            0xff
        )
            .toString(16)
            .padStart(2, "0")}${((hash >> 8) & 0xff)
                .toString(16)
                .padStart(2, "0")}`; // Convert hash to color
        return color.slice(0, 7); // Ensure the color is a valid hex
    };
    // Extract initials from the name
    const getInitials = (fullName) => {
        const nameParts = fullName.split(" ");
        const initials =
            nameParts.length > 1
                ? nameParts[0][0] + nameParts[1][0]
                : nameParts[0][0];
        return initials.toUpperCase();
    };

    const initials = getInitials(name);
    const bgColor = getColorFromName(name);
    // Render the SVG
    return (
        <svg
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            style={{ borderRadius: "50%" }}
        >
            {/* Background Circle */}
            <circle cx={size / 2} cy={size / 2} r={size / 2} fill={bgColor} />

            {/* Initials Text */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".35em"
                fontSize={size / 2}
                fill={textColor}
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
            >
                {initials}
            </text>
        </svg>
    );
};

export default Avatar;
