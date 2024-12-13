const readerConfig = {
    ar: {
        numbers: [
            ['صفر', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'],
            ['صفر', 'عشر', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'],
            ['صفر', 'مائة', 'مئتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة']
        ],
        specialNumbers: ['عشرة', 'أحد عشر', 'اثنا عشر'],
        readerOrder: [2, 0, 1], // 2: hundreds, 1: tens, 0: ones
        separateOperators: { and: 'و', space: 'و' },
        orders: ["الف", "مليون", "مليار", "تريليون", "كوادريليون", "كوينتيليون", "سيكستيليون", "سبتيليون", "أوكتليون", "نونيليون", "ديكليون", "أونديسليون", "دوديسليون", "تراديليون", "كواتوديسليون", "كوينديليون", "سيكسيليون", "سبتديليون", "أوكتوديسليون", "نوفيم ديليون", "فيجنتيليون", "أوندفيجنتيليون", "دودفيجنتيليون", "ترفيجنتيليون", "كواتودفيجنتيليون", "كوينفيجنتيليون", "سيكسفيجنتيليون", "سبتنفيجنتيليون", "أوكتوفيجنتيليون", "نوفيم فيجنتيليون", "ترينتيليون", "أوندترينتيليون", "دوترينتيليون"],
        additions: {
            2: { pure: 'ان', impure: 'ين' },
            '3-10': 'ات',
            '11-99': 'اً'
        },
        minusExpression: 'سالب',
        infinityExpression: 'مالانهاية',
        pointExpression: 'فاصلة',
        separateFloat: false,
        readOrderWithOne: true,
        removeAllSpaces: false,
    },
    en: {
        numbers: [
            ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
            ['zero', 'teen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
            ['zero', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
        ],
        specialNumbers: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        readerOrder: [2, 1, 0], // 2: hundreds, 1: tens, 0: ones
        separateOperators: { and: 'and', space: '' },
        orders: ["thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quattuordecillion", "quindecillion", "sexdecillion", "septendecillion", "octodecillion", "novemdecillion", "vigintillion", "unvigintillion", "duovigintillion", "trevigintillion", "quattuorvigintillion", "quinvigintillion", "sexvigintillion", "septenvigintillion", "octovigintillion", "novemvigintillion", "trigintillion", "untrigintillion", "duotrigintillion"],
        additions: {},
        minusExpression: 'minus',
        infinityExpression: 'Infinity',
        pointExpression: 'point',
        separateFloat: true,
        readOrderWithOne: true,
        removeAllSpaces: false,
    }
};

function readChunk(number = '', lang = 'en') { // For reading only 3 digits
    const { numbers, specialNumbers, separateOperators, readerOrder } = readerConfig[lang.toLowerCase().trim()];
    if (number == 0) return numbers[0][0];

    const sectionResult = {
        2: null, // hundreds
        1: null, // tens
        0: null // ones
    };

    for (let i = 0; i < number.length; i++) {
        const digit = parseInt(number[i]);
        const section = (number.length - i) - 1;
        const left = number.substring(i);

        if (section == 1 && digit == 1) { // To reading the special numbers
            const special = specialNumbers[left[left.length - 1]];
            if (special) {
                sectionResult[section] = special;
                break;
            }
        }

        sectionResult[section] = numbers[section][digit];
    }

    if (lang == 'ar' && sectionResult[1] == numbers[1][1]) { // To remove the separateOperator
        sectionResult[1] = sectionResult[0] + ' ' + sectionResult[1];
        sectionResult[0] = null;
    }

    if (lang == 'en' && sectionResult[1] && sectionResult[0] && sectionResult[1] != numbers[0][0]) { // Add '-' between the tens and ones 
        sectionResult[1] = sectionResult[1] + '-' + sectionResult[0];
        sectionResult[0] = null;
    }

    const result = [];
    readerOrder.forEach(order => {
        if (sectionResult[order]) result.push(sectionResult[order]);
    });

    return result.filter(e => e && e != numbers[0][0]).join(' ' + separateOperators.space);
}

function toLocalString(number, comma = ',') {
    const parts = number.toString().split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, comma);
    const decimalPart = parts[1] ? '.' + parts[1] : '';

    return integerPart + decimalPart;
}

function isValidNumber(str) {
    return !isNaN(parseFloat(str)) && !isNaN(str.toString().trim());
}

function isValidLang(lang = '') {
    return Object.keys(readerConfig).includes(lang.toLowerCase().trim());
}

function readNumber(number = '', lang = 'en') {
    number = number.toString().replaceAll(',', '').replaceAll('_', '').replace(/[٠-٩]/g, e => '٠١٢٣٤٥٦٧٨٩'.indexOf(e)).trim();

    if (!isValidNumber(number)) throw new Error('Invalid Number!');
    if (!isValidLang(lang)) throw new Error('Invalid Language!');

    const { numbers, orders, separateOperators, additions, minusExpression, infinityExpression, pointExpression, separateFloat, readOrderWithOne, removeAllSpaces } = readerConfig[lang.toLowerCase().trim()];

    const result = [];
    const [integer, decimal] = toLocalString(number.replaceAll('-', '')).split('.');

    if (integer.replaceAll(',', '').length > 3 * (orders.length + 1)) return infinityExpression;
    const chunks = integer.split(',');

    for (let i = 0; i < chunks.length; i++) {
        let chunk = chunks[i];
        if (chunk == 0) continue;

        let order = orders[chunks.length - (i + 2)];
        if (lang == 'ar' && order) { // Smart reading with the orders
            if (chunk == 2 && order == orders[0]) {
                order += (!chunks[i + 1] || chunks[i + 1] == 0) ? additions[chunk].pure : additions[chunk].impure;
                result.push(order);
                continue;
            }

            if (chunk == 1 && (!readOrderWithOne || order == orders[0])) {
                result.push(order);
                continue;
            }

            const tens = parseInt((chunk.length == 3) ? chunk.substring(1) : chunk);
            if (tens >= 3 && tens <= 10) order += additions['3-10']
            else if (tens >= 11 && tens <= 99) order += additions['11-99']

            order = order.replaceAll('الفات', 'آلاف').replaceAll('مليونات', 'ملايين');
        }

        result.push(readChunk(chunk, lang) + (order ? ' ' + order : ''));
    }

    if (lang == 'en' && result.length > 1) {
        const last = result.pop();
        result.push(separateOperators.and + ' ' + last);
    }

    let floatResult = [];
    if (parseFloat(decimal) > 0) {
        const floatNumbers = parseInt(decimal.split('').reverse().join('')).toString().split('').reverse().join('');

        if (separateFloat) {
            for (const num of floatNumbers.split('')) floatResult.push(readChunk(num, lang));
        } else floatResult.push(readChunk(floatNumbers, lang));

        if (floatResult.length > 0) floatResult = ` ${pointExpression} ` + floatResult.join(' ');
    }

    const minus = (parseInt(number) < 0) ? minusExpression + ' ' : '';

    let integerResult = (minus + (lang == 'ar' ? result.join(' ' + separateOperators.and) : result.join(' '))).trim();
    if (integerResult.length <= 0) integerResult = numbers[0][0];

    const finalResult = integerResult + floatResult

    return removeAllSpaces ? finalResult.replaceAll(' ', '') : finalResult;
}

function addLanguage(langCode, config) {
    if (readerConfig[langCode]) {
        throw new Error(`Language ${langCode} already exists.`);
    }

    readerConfig[langCode] = config;
}

const numReader = { // Made By Software Engineer: Shadi-AL-Hakimi
    readNumber,
    addLanguage,
    readerConfig
};

export default numReader;
