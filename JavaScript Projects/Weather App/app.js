window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={eeb157f935d744d3c1f90184a0b66b7f
}`
        
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {} = data.currently;
            });

        });
    }
});