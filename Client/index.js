var app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: () => ({
        snackbar: false,
        text: "buenas",
        timeout: 1500,
    }),
    methods: {
        getData: function () {
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
                    var dataF = data.json();
                } 
            ).catch(
                (error) => {
                    //console.log("Error: " + error)
                }
            );
        },
    }
})