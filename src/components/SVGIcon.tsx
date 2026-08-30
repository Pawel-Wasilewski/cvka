import type { JSX } from "react";

interface IconProps {
    svgRoute: string;
    svgAlt: string;
    width?: number;   // px
    height?: number;  // px
    hexIfMonochrome?: string;
    className?: string;
}

export default function SVGIcon({
                                    svgRoute,
                                    svgAlt,
                                    width = 32,
                                    height = 32,
                                    hexIfMonochrome,
                                    className,
                                }: IconProps): JSX.Element {
    if (hexIfMonochrome) {
        return (
            <span
                role="img"
                aria-label={svgAlt}
                className={className}
                style={{
                    display: "inline-block",
                    width,
                    height,
                    backgroundColor: hexIfMonochrome,
                    WebkitMaskImage: `url(${svgRoute})`,
                    maskImage: `url(${svgRoute})`,
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                }}
            />
        );
    }
    return (
        <img
            src={svgRoute}
            alt={svgAlt}
            width={width}
            height={height}
            className={className}
        />
    );
}