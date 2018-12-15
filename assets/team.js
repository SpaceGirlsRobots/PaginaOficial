var temMate = [
	{
		"name": "Arantza Ximena",
		"img": "aranza_ximena",
		"job": "not",
		"bio": "Me parece interesante la robótica. No sólo por el conocimiento que estamos adquiriendo sino también por la gran experiencia que significa estar participando en esta competencia. El poder innovar y crear son dos aspectos de la robótica que me parecen extraordinarios."
	},
	{	
		"name": "Angie Rodríguez",
		"img": "angie_shareni",
		"job": "not",
		"bio": "Desde que soy pequeña he tenido un gran apego a la tecnología, matemáticas y artes por lo que es lo que más me gusta hacer hasta la fecha. Me considero creativa y divertida por lo que trato de transmitir eso en todo lo que hago. Amo la física por lo que tengo considerado estudiar esta materia ya que se me hace muy interesante y lograré romper el estereotipo que las matemáticas y ciencias duras no son para mujeres."
	},
	{
		"name": "Africa Sahara",
		"img": "africa_space",
		"job": "asesora",
		"bio": "Orgullosa couch del primer equipo totalmente femenil del IDR, soy ingeniera en computación mi especialización fue en Inteligencia Artificial y preparo mi ingreso al doctorado en Neurociencias por parte de la UNAM. Tengo 23 años, de los cuales 8 han sido dedicados a la robótica. <br><br> Soy profesora de la primera universidad en México especializada en inteligencia artificial  y creo que aún existe mucho por aprender para llegar a una Inteligencia Artificial real. Mi lema de vida es “Generar un impacto positivo en la sociedad utilizando tecnología”, por eso soy líder de un proyecto para regalar ¡prótesis de mano a niños!, este sueño es apoyado por Fundación Robid."
	},
	{
		"name": "Mayra Yazmin",
		"img": "mayra_yazmin",
		"job": "not",
		"bio": "Soy una niña a la cual le gusta experimentar nuevas cosas y siempre quiero aprender algo nuevo.  Durante mi niñez me encontré con muchos acontecimientos que  la marcaron de muchas formas.<br><br> Lo más importante para mi es la familia  ya que son las personas que siempre estarán contigo y te enseñan lo que es la vida.<br><br> Mi pr eescolar y primaria los curse en Oaxaca y tuve que cambiar por problemas que se tenía en el lugar. \n La secundaria la estoy cursando ha sido muy interesante estos años he aprendido muchas cosas, me ha ido muy bien en la escuela, ahora estoy en tercero de secundaria y ya falta muy poco para tener nuevas experiencias y conocer cosas nuevas. <br><br> Tengo metas y sueños que ya he logrado y que aún me faltan por lograr.  La robótica me llama la atención porque es una forma de conocer técnicas y estrategias nuevas y si fallas en el intento puedes probar las veces necesarias hasta lograrlo."
	},
	{
		"name": "Aidé Cabrera",
		"img": "aide_space",
		"job": "asesora",
		"bio": "Estudiante de ingeniería en telecomunicaciones. Soy organizadora para el Google Developer Group  GDG WonderCoders que tiene como objetivo acercar a más chicas a la tecnología y programación. <br><br> Fundadora del capítulo GirlUp UNAM, una iniciativa que busca que más adolescentes conozcan las bondades del mundo STEAM. Amo compartir cómo con  tecnología podemos cambiar el mundo."
	}
]

function selectTeam(id) {
	let member = temMate[id];
	console.log(member.name)
	let modal = document.getElementById('modalTeam');
	document.getElementById("nameBio").innerHTML  = member.name;
	document.getElementById("imgBio").setAttribute("src", `assets/img/${member.img}.jpeg`);
	document.getElementById("imgBio").setAttribute("alt", member.img);
	document.getElementById("textBio").innerHTML = member.bio;
	modal.style.display = "flex";
	document.getElementById("body").classList.add('no-scroll');
	
}
function closeTeam(){
	let modal = document.getElementById('modalTeam');
	modal.style.display = "none";
	document.getElementById("body").classList.remove('no-scroll');
}
