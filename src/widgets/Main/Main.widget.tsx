import React, {lazy, Suspense} from "react";
import {isMobile} from "react-device-detect";
import {ICourse} from "@root/types";
const MobileResult = lazy(() => import("@/Components/Result/Result.mobile"));
const DesktopResult = lazy(() => import("@/Components/Result/Result.desktop"));
interface IProps {
    currentSubdirection: ICourse[]
}
const MainWidget = ({currentSubdirection}: IProps) => {

    const Result = isMobile
        ? MobileResult
        : DesktopResult;
    return (
        <Suspense fallback={null}>
            <Result currentSubdirection={currentSubdirection} />
        </Suspense>
    )
}

export default MainWidget;