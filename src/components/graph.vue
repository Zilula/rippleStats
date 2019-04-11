<template>
    <div id="wrapper">
        <div v-if="accounts.datasets[0].data" class="graph">
            <LineGraph :chartdata="accounts"/>
        </div>
        <div v-if='distribution.datasets[0].data' class="graph">
            <BarChart :chartdata="distribution"/>
        </div>
    </div>
</template>

<script>
import RippleApi from '../services/rippleApi';
import LineGraph from './LineGraph.vue';
import BarChart from './BarChart';
export default {
    components: {
        LineGraph,
        BarChart
    },
    data: () => ({
        accounts: {
            labels: null,
            datasets: [
                {
                    label: 'Accounts Created',
                    backgroundColor: 'white',
                    data: null
                }
            ]
        },
        distribution: {
            labels: null,
            datasets: [
                {
                    label: 'Current Distrubtuion',
                    backgroundColor: 'white',
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
                this.accounts.datasets[0].data = s.stats.map(stat => {
                    return stat.accounts_created;
                });
                this.accounts.labels = s.stats.map(stat => {
                    return stat.date;
                });
                console.log('hello', this.accounts.datasets[0].data);
            });
        RippleApi.getDist()
            .then(dist => {
                const labels = ['total', 'distributed', 'undistributed', 'escrowed'];
                this.distribution.labels = labels;
                const data = [dist.rows[0].total, dist.rows[0].distributed, dist.rows[0].undistributed, dist.rows[0].escrowed]
                ;
                this.distribution.datasets[0].data = data;

            });
    }
};
</script>

<style>
@media (max-width: 376px) {
    #wrapper {
        display: grid;
        grid-template-columns: 100%;
        grid-column-gap: 2em;
        margin: 2em;
    }
    .graph { max-width: 90vw;}
    
}
#wrapper {
    display: flex;
    grid-template-columns: 30% 30% 30%;
    grid-column-gap: 1em;
}
.graph {
    max-width: 90vw;
    max-width: 30em;
    background-color: rgb(187, 187, 187);
    border-radius: .5em;
    margin: 1em;
    padding-right: 1em;


}

</style>
