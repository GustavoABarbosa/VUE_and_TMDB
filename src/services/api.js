import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { language: 'pt-BR'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWFhZjcyOTQ0NTdiMGViOGNiYmM2ZDkzYmY3ZDdmNiIsInN1YiI6IjY0NmU4Mzg4ODk0ZWQ2MDBhNjdjMjViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nfc6TYZt0SyVvvlMuPhQZ9qEAI-j6dDl-2FH3avwlB8'
  }
});

export default api
