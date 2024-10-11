const readerConfig = {
    ar: {
        numbers: [
            ['صفر', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'],
            ['صفر', 'عشر', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'],
            ['صفر', 'مائة', 'مئتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة']
        ],
        specialNumbers: ['عشرة', 'أحد عشر', 'اثنا عشر'],
        separateOperators: { and: 'و', space: 'و' },
        orders: ['الف', 'مليون', 'مليار', 'تريليون', 'كوادريليون', 'كوانتيليون', 'سيكستيليون', 'سبتليليون', 'أوكتليون', 'نونوليون', 'ديكليون', 'أوندكليون', 'دودكليون', 'تريدكليون', 'كواتوردكليون', 'كواندكليون', 'سيكسدكليون', 'سبتندكليون', 'أوكتودكليون', 'نونوودكليون', 'فيجنتليون', 'أونفيجنتليون', 'دودفيجنتليون', 'تريفجنتليون', 'كواتورفيجنتليون', 'كواندفيجنتليون', 'سيكسفيجنتليون', 'سبتينفجنتليون', 'أوكتوفيجنتليون', 'نونوفيجنتليون', 'ترينجليون', 'أونترينجليون', 'دوترينجليون', 'ترترينجليون', 'كواتورترينجليون', 'كوانترينجليون', 'سيكسترينجليون', 'سبتينترينجليون', 'أوكتوترينجليون', 'نونوترينجليون', 'كوادريغليون', 'أونكوادريغليون', 'دوكوادريغليون', 'تر كوادريغليون', 'كواتوركوادريغليون', 'كوانكوادريغليون', 'سيكوكوادريغليون', 'سبتينكوادريغليون', 'أوكوكوادريغليون', 'نونوكوادريغليون', 'كوانتوجليون', 'أونكوانتوجليون', 'دوكوانتوجليون', 'تر كوانتوجليون', 'كواتوركوانتوجليون', 'كوانكوانتوجليون', 'سيكوكوانتوجليون', 'سبتينكوانتوجليون', 'أوكوكوانتوجليون', 'نونوكوانتوجليون', 'سيكسون', 'أونسكسون', 'دوسكسون', 'ترسكسون', 'كواتور سكسون', 'كوانسكسون', 'سيكسسكسون', 'سبتنسكسون', 'أوكتوسكسون', 'نونسكسون', 'سبتريون', 'أونسبتريون', 'دوسبتريون', 'ترسبتريون', 'كواتورسبتريون', 'كوانسبتريون', 'سيكسسبتريون', 'سبتنسبرتريون', 'أوكوسبتريون', 'نونسبتريون', 'أوكتوبلون', 'أونوكتوبلون', 'دوأوكتوبلون', 'ترأوكتوبلون', 'كواتورأوكتوبلون', 'كوانأوكتوبلون', 'سيكسأوكتوبلون', 'سبتينأوكتوبلون', 'أوكتوأوكتوبلون', 'نونأوكتوبلون', 'نوناينتليون', 'أوننوناينتليون', 'دونوناينتليون', 'ترنوناينتليون', 'كواتورنوناينتليون', 'كواننوناينتليون', 'سيكسنوناينتليون', 'سبتيننوناينتليون', 'أوكنوناينتليون', 'نوننوناينتليون', 'غوغول'],
        additions: ['ان'],
        minusExpression: 'سالب',
        infinityExpression: 'مالانهاية',
        pointExpression: 'فاصلة'
    },
    en: {
        numbers: [
            ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
            ['zero', 'teen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
            ['zero', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
        ],
        specialNumbers: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        separateOperators: { and: 'and', space: '' },
        orders: ['thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion', 'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'unvigintillion', 'duovigintillion', 'trevigintillion', 'quattuorvigintillion', 'quinvigintillion', 'sexvigintillion', 'septenvigintillion', 'octovigintillion', 'novemvigintillion', 'trigintillion', 'untrigintillion', 'duotrigintillion', 'tretrigintillion', 'quattuortrigintillion', 'quintrigintillion', 'sextrigintillion', 'septentrigintillion', 'octotrigintillion', 'novemtrigintillion', 'quadragintillion', 'unquadragintillion', 'doquadragintillion', 'trequadragintillion', 'quattuorquadragintillion', 'quinquadragintillion', 'sexquadragintillion', 'septenquadragintillion', 'octoquadragintillion', 'novemquadragintillion', 'quinquagintillion', 'unquinquagintillion', 'doquinquagintillion', 'trequinquagintillion', 'quattuorquinquagintillion', 'quinquinquagintillion', 'sexquinquagintillion', 'septenquinquagintillion', 'octoquinquagintillion', 'novemquinquagintillion', 'sexagintillion', 'unsexagintillion', 'dosexagintillion', 'tresexagintillion', 'quattuorsexagintillion', 'quinsexagintillion', 'sexsexagintillion', 'septensexagintillion', 'octosexagintillion', 'novemsexagintillion', 'septuagintillion', 'unseptuagintillion', 'doseptuagintillion', 'treseptuagintillion', 'quattuorseptuagintillion', 'quinseptuagintillion', 'sexseptuagintillion', 'septenseptuagintillion', 'octoseptuagintillion', 'novemseptuagintillion', 'octogintillion', 'unoctogintillion', 'dooctogintillion', 'treoctogintillion', 'quattuoroctogintillion', 'quinoctogintillion', 'sexoctogintillion', 'septenoctogintillion', 'octooctogintillion', 'novemoctogintillion', 'nonagintillion', 'unnonagintillion', 'dononagintillion', 'trenonagintillion', 'quattuornonagintillion', 'quinnonagintillion', 'sexnonagintillion', 'septennonagintillion', 'octononagintillion', 'novemnonagintillion', 'googol'],
        additions: [],
        minusExpression: 'minus',
        infinityExpression: 'Infinity',
        pointExpression: 'point'
    }
};

function readNumber(number = '', lang = 'en') { // For reading only 3 digits
    const { numbers, specialNumbers, separateOperators } = readerConfig[lang.toLowerCase().trim()];
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

        if (section == 1 && digit == 1) { // to reading the special numbers
            const special = specialNumbers[left[left.length - 1]];
            if (special) {
                sectionResult[section] = special;
                break;
            }
        }

        sectionResult[section] = numbers[section][digit];
    }

    if (lang == 'ar' && sectionResult[1] == numbers[1][1]) { // to remove the andOperator
        sectionResult[1] = sectionResult[0] + ' ' + sectionResult[1];
        sectionResult[0] = null;
    }

    const result = lang == 'ar' ? [sectionResult[2], sectionResult[0], sectionResult[1]] : [sectionResult[2], sectionResult[1], sectionResult[0]];
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
    return ['ar', 'en'].includes(lang.toLowerCase().trim());
}

function readNumbers(number = '', lang = 'en') {
    number = number.toString();

    if (!isValidNumber(number)) throw new Error('Invalid Number!');
    if (!isValidLang(lang)) throw new Error('Invalid Language!');

    const { numbers, orders, separateOperators, additions, minusExpression, infinityExpression, pointExpression } = readerConfig[lang.toLowerCase().trim()];

    const result = [];
    const [integer, decimal] = toLocalString(number.replaceAll('-', '')).split('.');

    if (integer.replaceAll(',', '').length > 3 * (orders.length + 1)) return infinityExpression;
    const chunks = integer.split(',');

    for (let i = 0; i < chunks.length; i++) {
        let chunk = chunks[i];
        if (chunk == 0) continue;

        let order = orders[chunks.length - (i + 2)];
        if (lang == 'ar' && chunk <= 2 && order == orders[0]) {
            if (chunk == 2) order = order + additions[0];
            result.push(order);
        } else result.push(readNumber(chunk, lang) + (order ? ' ' + order : ''));
    }

    if (lang == 'en' && result.length > 1) {
        let last = result.pop();
        result.push(separateOperators.and + ' ' + last);
    }

    let floatResult = '';
    if (parseFloat(decimal) > 0) {
        const floatNumbers = parseInt(decimal.split('').reverse().join('')).toString().split('').reverse().join('').split('');
        for (const num of floatNumbers) floatResult += readNumber(num, lang) + ' ';
        if (floatResult.length > 0) floatResult = ` ${pointExpression} ` + floatResult.trim();
    }

    const minus = (parseInt(number) < 0) ? minusExpression + ' ' : '';

    let integerResult = (minus + (lang == 'ar' ? result.join(' ' + separateOperators.and) : result.join(' '))).trim();
    if (integerResult.length <= 0) integerResult = numbers[0][0];

    return integerResult + floatResult
}

const numReader = { // Made by Software Engineer: Shadi-AL-Hakimi
    readNumbers,
    readerConfig
};

export default numReader;
