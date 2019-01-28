<template>


    <div v-if="accounts.datasets[0].data">
        <LineGraph :chartdata="accounts" />
        </div>
</template>

<script>
import RippleApi from '../services/rippleApi';
import LineGraph from './LineGraph.vue';
export default {
    components: {
        LineGraph
    },
    data: () => ({
        accounts: {
            labels: null,
            datasets: [
                {
                    label: 'Accounts Created',
                    backgroundColor: '#f87979',
                    data: null
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false
        },
    }),
    created() {
        RippleApi.getStats()
            .then(s => {
                console.log('s', s);
                this.accounts.datasets[0].data = s.stats.map(stat => {
                    return stat.accounts_created;
                });
                this.accounts.labels = s.stats.map(stat => {
                    return stat.date;
                });
                console.log('hello', this.accounts);
            });
    }
};
</script>

<style>

</style>
