function phoneNumber([phoneBook]) {
    let pattern = /\+359[ -]2[ -]\d{3}[ -]\d{4}\b/g;
    let result = phoneBook.match(pattern);

    console.log(result.join(', '));
}
phoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);