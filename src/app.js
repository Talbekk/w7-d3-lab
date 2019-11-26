import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countryList: [],
      totalPopulation: 0,
      chosenCountry: null,
      favoriteCountries: []
    },
    mounted() {
      this.fetchCountries();
    },
    computed: {
      fetchTotalPopulation: function () {
      return this.countryList.reduce((total, country) => total += country.population, 0);
    }
  },
    methods: {
      fetchCountries: function () {
          const request = fetch("https://restcountries.eu/rest/v2/all")
          .then(response => response.json())
          .then(data => this.countryList = data);
      },
      addCountry: function() {
          this.favoriteCountries.push(this.chosenCountry);
      }


    }
});
});
