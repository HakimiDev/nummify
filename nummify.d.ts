// nummify.d.ts

declare module 'nummify' {
    interface ReaderConfig {
        numbers: string[][];
        specialNumbers: string[];
        separateOperators: {
            and: string;
            space: string;
        };
        orders: string[];
        additions: string[];
        minusExpression: string;
        infinityExpression: string;
        pointExpression: string;
    }

    interface NumReader {
        readNumbers(number: string | number, lang?: 'ar' | 'en'): string;
        readerConfig: {
            ar: ReaderConfig;
            en: ReaderConfig;
        };
    }

    const numReader: NumReader;
    export default numReader;
}
