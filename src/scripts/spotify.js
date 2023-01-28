export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:5173/";
const clientId = "0065986c5e96423ab318b7346c14f686";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];


export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
m}


// #access_token=BQBEl3r8w4JUkOxJUeTRNlnUjHMGpRGoAnryBJzB35n26SeRq_pv-39QnqBam1zfHciWUPCaTjb7U1msiVqM95eFDvXulq5Qf5vQZf_kpH1PcX5URlSvHmYhGqE_IX1hN3jt12CG9wKEcy0GJESWHkzJaxFzsnG4a2pgghQ2U919RsJePwL3G0SeQDFtVNaKhlhC

// http://localhost:5173/#access_token=BQBEl3r8w4JUkOxJUeTRNlnUjHMGpRGoAnryBJzB35n26SeRq_pv-39QnqBam1zfHciWUPCaTjb7U1msiVqM95eFDvXulq5Qf5vQZf_kpH1PcX5URlSvHmYhGqE_IX1hN3jt12CG9wKEcy0GJESWHkzJaxFzsnG4a2pgghQ2U919RsJePwL3G0SeQDFtVNaKhlhC&token_type=Bearer&expires_in=3600


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;