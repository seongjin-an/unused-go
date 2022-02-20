import React from "react";
import {useLocation} from "react-router-dom";
import {List} from "../../molecules/contents/list";
import withMain from "../../../hoc/withMain";
import {CommunityNavigator} from "../../molecules/contents/community";

export const CommunityTemplate:React.FC = () => {
    const {pathname} = useLocation()
    const WrappedComponent: React.FC = () => (
        <>
            <CommunityNavigator/>
            <List listType="community"/>
        </>
    )
    const Community = withMain(WrappedComponent, {paddingTop: theme => theme.padding.secondary})
    return(
        <Community/>
    )
}