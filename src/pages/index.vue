<script setup>
 import {ref} from 'vue';
 import { useQuotes } from '../composables/useapi';
  
 const {quotes, multipleQuotes} = useQuotes();

 const multiple = ref("")
</script>


<template>
  <h1 class="text-6xl text-yellow-500 mt-10 p-3 pb-4 pt-1 tracking-tight font-semibold rounded-3xl bg-black">Your <span class="font-bold">Br</span>eaking<span class="font-bold">Ba</span>d daily inspiration</h1>
  <div class="w-4/5 mx-auto p-5 mt-10 text-xl font-light bg-yellow-700 bg-opacity-90 rounded-md overflow-hidden">
  <div class="flex flex-auto space-x-4 items-center">
    <p class="font-semibold text-2xl">How many quotes would you like to read? </p>
    <input v-model="multiple" @change="multipleQuotes(multiple)" type="text" placeholder="Number of quotes" class=" text-base rounded-md p-2 font-light">
  </div>
    <div class="grid grid-cols-2 gap-10 pt-8">
      <div 
      v-for="(quote, author, index) in quotes" :key="index" class=""> 
      <p class="border-2 border-slate-400 p-2 italic shadow-2xl bg-slate-300 rounded-3xl overflow-auto">"{{quote.quote}}" - <span class="font-semibold">{{quote.author}}</span></p>
     </div>
    </div>
  </div>
 </template>