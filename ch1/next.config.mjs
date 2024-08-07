/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ['images.pexels.com']
    },
    // for redirects------------------------------
    // async function lata ha, return ma array aur array ky andr object, object ky and source aur destination,
    redirects : async ()=>{
        return[
            {
                source: 'is ma oska path dana jisy redirect krwana forexample profile page',
                destination : ' oska path dana jidr redirect krna forexample login page',
                permanent : ' if we delete page permanent, otherwise is na use kro no issue, but source aur destination Lazami h'
            },
            // for dynamic route we use /profile/:/id 
            // first folder name the /: second folder name
            {
                source: 'is ma oska path dana jisy redirect krwana forexample profile page/:inside folder name',
                destination : ' oska path dana jidr redirect krna forexample login page'
            },
            {
                source: 'is ma oska path dana jisy redirect krwana forexample profile page',
                destination : ' oska path dana jidr redirect krna forexample login page'
            }
        ]
    }

};

export default nextConfig;
