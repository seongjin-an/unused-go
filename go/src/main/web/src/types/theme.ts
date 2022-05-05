export interface Theme {
    palette: {
        [K in keyof IPalette]: IPalette[K];
    };
    padding: {
        [K in keyof IPadding]: IPadding[K];
    };
}

export interface IPadding {
    main: string;
    secondary: string;
}

export interface IPalette {
    common: ICommonColors;
    primary: IColors;
    secondary: IColors;
    success: IColors;
    error: IColors;
    warning: IColors;
    info: IColors;
}
export interface ICommonColors {
    white: string;
    gray: string;
    darkGray: string;
    black: string;
    red: string;
    pink: string;
    orange: string;
    yellow: string;
    mint: string;
    green: string;
    darkGreen: string;
    skyBlue: string;
    blue: string;
    violet: string;
}

export interface IColors {
    main: string;
    light: string;
    dark: string;
}
