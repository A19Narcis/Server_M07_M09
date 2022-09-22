var app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: {},
    methods: {
        getData: function () {
            console.log("Get data");
            const myHeaders = new Headers();

            let nomUser = document.getElementById("user").value;
            let passwd = document.getElementById("pass").value;

            fetch("http://localhost:3000/auth/" + nomUser + "/" + passwd,
                {
                method: "GET",
                headers: myHeaders,
                mode: "cors",
                cache: "default"
                }
            ).then(
                (response)=>{
                    console.log(response);
                    return response.json();
                }
            ).then(
                (data) => {
                    console.log(data);
                } 
            ).catch(
                (error) => {
                    //console.log("Error: " + error)
                }
            );
        }
    }
})