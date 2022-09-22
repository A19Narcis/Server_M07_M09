var app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: () => ({
        snackbar: false,
        text: "No se poner la data :)",
        timeout: 1500
    }),
    methods: {
        getData: function (req, res) {
            console.log("Get data");
            const myHeaders = new Headers();

            var userID = document.getElementById("user").value;
            var passID = document.getElementById("passwd").value;

            fetch("http://localhost:3000/auth/" + userID + "/" + passID,
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