/* Available units, and how many are produced on PRODUCTION */
const units = {
    flagship: {
        amount: 1,
        cost: 8,
    },
    warsun: {
        amount: 1,
        cost: 12,
    },
    dreadnaught: {
        amount: 1,
        cost: 4
    },
    cruiser: {
        amount: 1,
        cost: 2
    },
    destroyer: {
        amount: 1,
        cost: 1,
    },
    carrier: {
        amount: 1,
        cost: 3,
    },
    fighter: {
        amount: 2,
        cost: 1,
    },
    infantry: {
        amount: 2,
        cost: 1,
    },
};

/* Set up all event handling. All changed values will call `onChange`, which will
 * then calculate and update amount of units and total cost */
const costLabel = document.querySelector('.cost');
const unitsLabel = document.querySelector('.units');
const hasSarweenTools = document.querySelector('.has_sarween_tools');
const entries = {}
for (const [unit, _] of Object.entries(units)) {
    const amount = document.querySelector('.' + unit + '_amount');
    const cost = document.querySelector('.' + unit + '_cost');
    entries[unit] = {
        amount: amount,
        cost: cost,
    };
    amount.addEventListener('change', onChange);
}
hasSarweenTools.addEventListener('change', onChange);

/* Handle any change, and update the total cost, and number of units */
function onChange() {
    var cost = 0;
    var produced = 0;
    for (const [unit, purchase] of Object.entries(units)) {
        /* Calculate cost for unit */
        const amount = Number(entries[unit].amount.value);
        cost += purchase.cost * amount;
        produced += purchase.amount * amount;
    }
    /* Add sarween tools discount */
    if (hasSarweenTools.checked) {
        cost = Math.max(0, cost - 1);
    }

    /* Write result to labels */
    costLabel.innerHTML = String(cost);
    unitsLabel.innerHTML = String(produced);
    const nFlagships = Number(entries['flagship'].amount.value);

}

/* vim: set et ts=4 sw=4 ss=4 tw=100 : */
