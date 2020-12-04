function centuries(century) {
    let years = century * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${years}  ${days}  ${hours}  ${minutes}`);
}
centuries(1);