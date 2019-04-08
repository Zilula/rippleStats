export default {
    getStats() {
        return fetch('https://data.ripple.com/v2/stats/?start=2015-09-20&end=2015-10-20&interval=day&family=metric&metrics=accounts_created,exchanges_count,ledger_count,payments_count')
            .then(response => response.json());
    },
    getDist() {
        return fetch('https://data.ripple.com/v2/network/xrp_distribution?limit=3&descending=true')
            .then(res => res.json());
    }
};



  