function extractEmails(arr) {

    for (const line of arr) {
        let pattern = /[^\w\.\_\-](?<user>[a-z]+[\.\-\_]?([a-z\d]+)?)@(?<host>[a-z]+([\.\-\_a-z]+)?)\.[a-z]+\b/g;
        let match = line.match(pattern);
        if (match) {
            match.forEach(email => {
                console.log(email);
            })
        }
    }

}
extractEmails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.', 'end']);