import React from "react";
import {MainDash, MainProduct} from "../../molecules/contents/main";
import withMain from "../../../hoc/withMain";

export const Main: React.FC = () => {
    const WrappedMainContents: React.FC = () => (
        <>
            <MainDash/>
            <MainProduct/>
        </>
    )
    const MainContents = withMain(WrappedMainContents, {paddingTop: theme => theme.padding.main})
    return <MainContents/>
}
