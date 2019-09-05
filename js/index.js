let firebaseConfig = {
    apiKey: "AIzaSyAMwTw1h3stlgc8QH0sen9dIMmGAfLaDe8",
    authDomain: "plainjs-6940d.firebaseapp.com",
    databaseURL: "https://plainjs-6940d.firebaseio.com",
    projectId: "plainjs-6940d",
    storageBucket: "",
    messagingSenderId: "991161440562",
    appId: "1:991161440562:web:b8efc55378c3d187955f2b"
};

const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 3000
});

firebase.initializeApp(firebaseConfig);

$("#btn-login").click(function () {
    let email = $("#email").val();
    let password = $("#password").val();

    if (email != "" && password != "") {
        let res = firebase.auth().signInWithEmailAndPassword(email, password);

        res
        .then(() => {
            Toast.fire({
                type: "success",
                title: "Signed in successfully"
            });
        })
        .catch(err => {
            let errCode = err.code;
            let errMsg = err.message;
            Toast.fire({
                type: "error",
                title: errMsg
            });
        });
    } else {
        Toast.fire({
            type: "error",
            title: "Please Fill Email Or Password"
        });
    }
});
