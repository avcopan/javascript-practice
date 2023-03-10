let count = 0;

function cc(card) {
    // in/decrement count based on card value
    if ('23456'.includes(card)) {
        count += 1;
    } else if ('10JQKA'.includes(card) && ![0, 1].includes(card)) {
        count -= 1;
    }

    // return whether to bet or hold
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

for (const c of [10, 'J', 'Q', 'K', 'A']) {
    console.log(cc(c));
}
