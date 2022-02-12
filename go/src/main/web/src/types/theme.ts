export interface Theme{
    palette: {
        [K in keyof IPalette]: IPalette[K]
    }
}

export interface IPalette{
    common: ICommonColors;
    primary: IColors;
    secondary: IColors;
    success: IColors;
    error: IColors;
    warning: IColors;
    info: IColors;
}
export interface ICommonColors{
    black: string;
    white: string;
}

export interface IColors{
    main: string;
    light: string;
    dark: string;
}