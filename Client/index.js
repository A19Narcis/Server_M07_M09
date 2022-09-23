var app = new Vue({
    el: "#app",
    data: {
        user: "",
        passwd: "",
        snackbar: false,
        text: "",
        timeout: 2000,
    },
    vuetify: new Vuetify(),
    methods: {
        getData: function () {
            console.log("Get data");
            const myHeaders = new Headers();
            
            fetch("http://localhost:3000/auth/" + this.user + "/" + this.passwd,
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
                    this.snackbar = true;
                    if (!data.isAuth){
                        this.text = "No pots accedir"
                    } else {
                        this.text = "Usuari vàlid --> Rols: " + data.rols; //Texto snackbar
                    }
                } 
            ).catch(
                (error) => {
                    //console.log("Error: " + error)
                }
            );
        }
    },
    
})