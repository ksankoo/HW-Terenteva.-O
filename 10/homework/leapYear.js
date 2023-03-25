function whatYear() {

    let year = prompt('Введи год, чтобы узнать, високосный ли он');

    let a = year % 4;

    if (a == 0) {

        let b = year % 100;

        if (b == 0) { 
            let c = year % 400;

            if (c == 0) { 
                alert( `${year} это високосный год!` );

            } else {
                alert( `${year} это НЕ високосный год!` );
            }
        } else {
            alert( `${year} это високосный год!` );
        }

    } else {
        alert( `${year} это НЕ високосный год!` );
    }
}


