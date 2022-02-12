import React from "react";
import {MainWrapper} from "../components/organisms/contents";
import {SxProps, SystemStyleObject} from "../types/sx";
import {Theme} from "../types/theme";
import {theme} from '../data/theme'

export interface IInjectedMainComponentProps {}
export interface IExternalMainComponentProps {}
const handleSxProps = (sx?: SxProps<Theme>): SystemStyleObject<Theme> => {
    if(typeof sx === 'function'){
        return sx(theme)
    }
    return Object.fromEntries(Object.entries(sx!).map(([key, value]) => {
        return [key, typeof value === 'function' ? handleSxProps(value) : value]
    }))
}
const withMain =
    <TOriginalProps extends {}>(
        WrappedComponent: React.ComponentClass<TOriginalProps & IInjectedMainComponentProps> |
            React.FunctionComponent<TOriginalProps & IInjectedMainComponentProps>,
        sx?: SxProps<Theme>
    ) => {
    type ResultProps = TOriginalProps & IExternalMainComponentProps
    const IntermeidateComponent: React.FC<ResultProps> = (props) => {
        return (
            <MainWrapper
                sx={sx && handleSxProps(sx)}
                render={() => <WrappedComponent {...props} />}
            />
        )
    }
    return IntermeidateComponent
}
export default withMain