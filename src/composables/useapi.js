import { ref } from "vue";
import axios from "axios";

const quotes = ref([]);

const api = axios.create({
    baseURL: "https://breaking-bad-quotes.herokuapp.com/v1/quotes",
});


const getRandomQuote = async () => {
    const response = await api.get();
    if (response.status === 200) {
        quotes.value = response.data;
    }
};

export const useQuotes = () => {
    getRandomQuote();
    const multipleQuotes = async (multiple) => {
     const response = await api.get(`/${multiple}`);

     if (response.status === 200) {
        quotes.value = response.data;
    }
};

  return { quotes, multipleQuotes };
};