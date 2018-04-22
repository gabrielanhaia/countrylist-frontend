<template>
    <div class="card">
        <div class="card-body">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="">Lista de países (Country List)</a>
                    </div>
                </div>
            </nav>

            <table class="table table-striped table-bordered">
                <thead>
                <tr>
                    <th v-on:click="changeOrder" class="link-order"><i class="fa fa-sort"></i>&nbsp;&nbsp;&nbsp;Código
                        (Code)
                    </th>
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
                orderDesc: 0,
            }
        },
        methods: {
            loadCountries(orderDesc) {
                axios.get(
                    'www.paises-server.mestredev.com.br/api/country',
                    {
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        params: {
                            order_descending: orderDesc
                        }
                    }
                ).then((response) => {
                    this.countries = response.data
                }, (err) => {
                    console.log(err)
                })
            },
            changeOrder() {
                if (this.orderDesc == 0) {
                    this.orderDesc = 1;
                } else {
                    this.orderDesc = 0;
                }

                this.loadCountries(this.orderDesc)
            }
        },
        mounted() {
            this.loadCountries(this.orderDesc);
        }
    }
</script>

<style>
    .link-order {
        cursor: grabbing;
    }
</style>
