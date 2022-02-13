import React from "react";
import {MainWrapper} from "../components/organisms/contents";
import {SxProps, SystemStyleObject} from "../types/sx";
import {Theme} from "../types/theme";
import {handleSxProps, theme} from '../data/theme'

export interface IInjectedMainComponentProps {}
export interface IExternalMainComponentProps {}

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