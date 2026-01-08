const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // ATS scanning
  async scanAts(resumeData) {
    return this.request('/ats/scan', {
      method: 'POST',
      body: JSON.stringify(resumeData),
    });
  }

  // GitHub scanning
  async scanGithub(username) {
    return this.request(`/github/scan/${username}`);
  }

  // LinkedIn scanning
  async scanLinkedin(profileUrl) {
    return this.request('/linkedin/scan', {
      method: 'POST',
      body: JSON.stringify({ profileUrl }),
    });
  }

  // Roadmap generation
  async generateRoadmap(data) {
    return this.request('/roadmap/generate', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Resume operations
  async auditResume(resumeData) {
    return this.request('/resume/audit', {
      method: 'POST',
      body: JSON.stringify(resumeData),
    });
  }

  async tailorResume(resumeData, jobDescription) {
    return this.request('/resume/tailor', {
      method: 'POST',
      body: JSON.stringify({ resumeData, jobDescription }),
    });
  }
}

const api = new ApiService();
export default api;