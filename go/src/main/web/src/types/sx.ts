import * as CSS from "csstype"; 

export type SxProps<Theme extends object = {}> =
    | SystemStyleObject<Theme>
    | ((theme: Theme) => SystemStyleObject<Theme>)

export type SystemStyleObject<Theme extends object = {}> =
    | SystemCssProperties<Theme>
    | CSSPseudoSelectorProps<Theme>
    | CSSSelectorObject<Theme>
    | null;

export type SystemCssProperties<Theme extends object = {}> = {
    [K in keyof AllSystemCSSProperties]:
    | AllSystemCSSProperties[K]
    | ((theme: Theme) => AllSystemCSSProperties[K] )
    | SystemStyleObject<Theme>
};
export type StandardCSSProperties = CSS.PropertiesFallback<number | string>;

export interface AllSystemCSSProperties extends StandardCSSProperties{}

export type CSSPseudoSelectorProps<Theme extends object = {}> = {
    [K in CSS.Pseudos]?: ((theme: Theme) => SystemStyleObject<Theme>) | SystemStyleObject<Theme>;
};

export interface CSSSelectorObject<Theme extends object = {}> {
    [cssSelector: string]: ((theme: Theme) => SystemStyleObject<Theme>) | SystemStyleObject<Theme>;
}