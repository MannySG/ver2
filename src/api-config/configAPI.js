let API_URL = '';
if( process.env.REACT_APP_MODE === 'development' ){
    API_URL = 'https://api-dev.bettertax.co/api/v1/user/waitlist/'
}else if (
    process.env.REACT_APP_MODE === 'production'
){
    API_URL = 'https://api-prod.bettertax.co/api/v1/user/waitlist/'
}else if(
    process.env.REACT_APP_MODE === 'staging'
){
    API_URL = 'https://stg.safehold.xyz/api/v1/user/waitlist/'
}

export default API_URL;
