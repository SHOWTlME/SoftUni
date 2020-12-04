function joroVacation(pages, pagesPerHour, days) {
    pages = Number(pages);
    pagesPerHour = Number(pagesPerHour);
    days = Number (days);

    let res = pages / pagesPerHour  / days;

    console.log(res);
}

joroVacation("432",
"15",
"4");