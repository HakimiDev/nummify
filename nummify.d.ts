// nummify.d.ts

declare export interface ReaderConfig {
    numbers: string[][];
    specialNumbers: string[];
    readerOrder: number[];
    separateOperators: {
        and: string;
        space: string;
    };
    orders: string[];
    additions: {
        [key: number]: { pure: string; impure: string } | string;
    };
    minusExpression: string;
    infinityExpression: string;
    pointExpression: string;
    separateFloat: boolean;
    readOrderWithOne: boolean;
    removeAllSpaces: boolean;
}

declare export interface ReaderConfigs {
    ar: ReaderConfig;
    en: ReaderConfig;
    [langCode: string]: ReaderConfig;
}

declare export interface NumReader {
    readNumber(number: string | number, lang?: string): string;
    addLanguage(langCode: string, config: ReaderConfig): void;
    readerConfig: ReaderConfigs;
}

declare export const numReader: NumReader;