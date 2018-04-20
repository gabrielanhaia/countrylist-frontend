<template>
    <div class="card">
        <div class="card-body">
            <table class="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Código (Code)</th>
                    <th>Nome (Name)</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="country in countries.data">
                    <td>{{country.code}}</td>
                    <td>{{country.name}}</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        name: 'countries',
        data() {
            return {
                countries: [],
            }
        },
        methods: {
            loadCountries() {
                axios.get(
                    'http://localhost:8000/api/country',
                    {
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }
                    }
                ).then((response) => {
                    this.countries = response.data
                }, (err) => {
                    console.log(err)
                })
            }
        },
        mounted() {
            this.loadCountries();
        }
    }
</script>

<style>
</style>
