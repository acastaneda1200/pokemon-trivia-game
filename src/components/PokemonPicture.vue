<template lang="">
<div class="pokemon-container">
   <img 
      :class="[showPokemon ? 'show-pokemon' : 'hidden-pokemon']" 
      class="fade-in"
      :src="imgSrc" alt="pokemon image">
   <!-- <img 
      class="fade-in"
   :src="imgSrc" alt="pokemon"> -->
  </div>            
</template>
<script>
export default {
  props: {
    pokemonId:{
      type: Number,
      required: true
    },
    showPokemon:{
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed:{
    imgSrc(){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }


};
</script>
<style scoped>
/* Pokemon Picture */
.pokemon-container {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  margin: auto;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  transition: all 0.4s ease;
}
.hidden-pokemon {
  filter: brightness(0);
}
.show-pokemon {
  filter: none;
}

</style>
