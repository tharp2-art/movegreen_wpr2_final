import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    user: null,
    sustainabilityScore: 0,
    mapMarkers: [],
    communityFeed: []
  }),
  
  actions: {
    updateSustainabilityScore(points) {
      this.sustainabilityScore += points
    },
    
    addMapMarker(marker) {
      this.mapMarkers.push(marker)
    },
    
    addCommunityPost(post) {
      this.communityFeed.unshift(post)
    }
  },
  
  getters: {
    isLoggedIn: (state) => !!state.user,
    userLevel: (state) => Math.floor(state.sustainabilityScore / 100)
  }
})
