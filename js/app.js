//login
var provider = new firebase.auth.GoogleAuthProvider();

$(document).ready(function(){
	$('#log').click(function(){
			firebase.auth().signInWithPopup(provider).then(function(result){
			console.log(result.user);
			guardarDatos(result.user);
		});
	});
})


//datos en automático
function guardarDatos(user){
	var usuario = {
		uid:user.uid,
		nombre:user.displayName,
		email:user.email,
		foto:user.photoURL
	}
	firebase.database().ref("rama/" + user.uid)
	.set(usuario)
}


//leyendo de la base de datos
/*firebase.database().ref("rama")
.on("child_added",function(s){
	var user = s.val();
	$('#root').append("<img width='100px' src='"+user.foto+"'>");
	//$('#root').append("<p>"+user.nombre + "</p>");

})*/


//
