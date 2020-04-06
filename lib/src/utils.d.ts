declare const setSafeBounceHeight: (height: number) => void;
declare const getSafeBounceHeight: () => number;
declare const getDefaultHeaderHeight: (isLandscape: boolean) => 32 | 44 | 56 | 0;
declare const getNavigationHeight: (isLandscape: boolean, headerHeight: number) => number;
declare const getScrollIndicatorInsetTop: (isLandscape: boolean, headerHeight: number) => number;
export { setSafeBounceHeight, getSafeBounceHeight, getDefaultHeaderHeight, getNavigationHeight, getScrollIndicatorInsetTop, };
