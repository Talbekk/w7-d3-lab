import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countryList: null,
      totalPopulation: 0,
      chosenCountry: {
        name: "",
        flag: null
      }
    },
    mounted() {
      this.fetchCountries();
      this.fetchTotalPopulation());
    },
    computed: {
      fetchTotalPopulation: function () {
      const result = this.countryList.reduce((total, country) => total += country.population, 0);
      return this.totalPopulation = result;
    }
  },
    methods: {
      fetchCountries: function () {
          const request = fetch("https://restcountries.eu/rest/v2/all")
          .then(response => response.json())
          .then(data => this.countryList = data);
      },
      getCountry: function (name) {
        const result = this.countryList.find(country => country.name === name);
        this.chosenCountry.name = result.name;
        this.chosenCountry.flag = result.flag;
      }

    }
});
});
