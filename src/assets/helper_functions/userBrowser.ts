import ScreenSize from "@/assets/data/screenSize.ts";

export function getUserBrowserWidth(): ScreenSize {
    const width: number = document.body.clientWidth;
    if (width < 768) {
        return ScreenSize.MOBILE;
    } else if (width >= 768 && width < 1024) {
        return ScreenSize.TABLET;
    } else {
        return ScreenSize.DESKTOP;
    }
}
