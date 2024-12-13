import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    user: null,
    mapMarkers: [],
    sustainabilityScore: 0,
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.user,
    userScore: (state) => state.sustainabilityScore,
  },
  
  actions: {
    async login(credentials) {
      // TODO: Implement login logic
    },
    
    async logout() {
      this.user = null
    },
    
    addMapMarker(marker) {
      this.mapMarkers.push(marker)
    },
    
    updateSustainabilityScore(points) {
      this.sustainabilityScore += points
    },
  },
})
