import { create } from 'zustand';

const useStore = create((set) => ({
  // User profile state
  userProfile: null,
  setUserProfile: (profile) => set({ userProfile: profile }),

  // Scan results
  atsResults: null,
  githubResults: null,
  linkedinResults: null,
  setAtsResults: (results) => set({ atsResults: results }),
  setGithubResults: (results) => set({ githubResults: results }),
  setLinkedinResults: (results) => set({ linkedinResults: results }),

  // Roadmap
  roadmap: null,
  setRoadmap: (roadmap) => set({ roadmap }),

  // UI state
  loading: false,
  setLoading: (loading) => set({ loading }),

  // Clear all data
  clearData: () => set({
    userProfile: null,
    atsResults: null,
    githubResults: null,
    linkedinResults: null,
    roadmap: null,
  }),
}));

export default useStore;