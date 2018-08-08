const dataRestaurantes = {
    "restaurantes":[
        {"nombre":"Central Restaurant",
        "direccion":" Jirón 2 de Mayo 253",
        "distrito" : "Barranco 15063",
        "Teléfono": "(01) 2428515",
        "tipo": "Peruana",
        "foto": "https://www.comedera.com/wp-content/uploads/2017/06/2.jpg"
        },
        {"nombre":"Isolina",
        "direccion":" Av San Martin 101",
        "distrito": "Miraflores",
        "Teléfono": "(01) 2425678",
        "tipo": "Peruana",
        "foto": "https://www.comedera.com/wp-content/uploads/2017/06/2.jpg"
        }, 
        {"nombre":"Amoramar",
        "direccion":" Jirón 2 de Mayo 253, Barranco 15063",
        "distrito" : "surco 1506",
        "Teléfono": "(01) 25498505",
        "tipo": "Mexicana",
        "foto": "https://www.comedera.com/wp-content/uploads/2017/06/2.jpg"
        },
        {"nombre":"El Charro",
        "direccion":" Jirón 2 de Mayo 253, Barranco 15063",
        "distrito" : "San bORJA 163",
        "Teléfono": "(01) 68909273",
        "tipo": "Mexicana",
        "foto": "https://www.comedera.com/wp-content/uploads/2017/06/2.jpg"
        },
         {"nombre":"Rigoletto",
        "direccion":"Calle Colón 161, Miraflores 15074",
        "distrito" : "Barranco 15063",
        "Teléfono": "(01) 5741053",
        "tipo": "Italiana",
        "foto": "https://www.comedera.com/wp-content/uploads/2017/06/2.jpg"
        },
         {"nombre":"La 73",
        "direccion":"  Av. el Sol 1756",
        "distrito" : "Lima",
        "Teléfono": "(01) 97655815",
        "tipo": "Italiana",
        "foto": "https://www.comedera.com/wp-content/uploads/2017/06/2.jpg",
        },
         {"nombre":"Sóngoro Cosongo",
        "direccion":" Jirón Ayacucho 281",
        "distrito" : "La Victoria 153",
        "Teléfono": "(01) 22671738",
        "tipo": "Criolla",
        "foto": "https://www.comedera.com/wp-content/uploads/2017/06/2.jpg"
        },
         {"nombre":"Veggie Pizza",
        "direccion":" Jr. Colina 112",
        "distrito" : "Barranco ",
        "Teléfono": "(01) 36384408",
        "tipo": "Vegana",
        "foto": "https://www.comedera.com/wp-content/uploads/2017/06/2.jpg"
        }, 
        {"nombre":"Fridays Larcomar",
        "direccion":" Larcomar, Malecón de la Reserva 610",
        "distrito" : "Miraflores",
        "Teléfono": "(01) 7953638",
        "tipo": "Fast Food",
        "foto": "https://www.comedera.com/wp-content/uploads/2017/06/2.jpg"
        }
    ]
}

const buscar = document.getElementById('btnBuscar');
buscar.addEventListener('click',() =>{
    console.log('boton buscar funcional');
    let seleccion = document.getElementById('seleccion').value;
    let restFilters = dataRestaurantes.restaurantes.filter(place => place.tipo === seleccion);
    console.log(restFilters)
    const resultados = document.getElementById('resultados');
    let data = "";
    restFilters.forEach(rest =>{
        data += `
        <div class="div-data ">
            <p class="div-data-text">${rest.nombre}</p>
        </div>
        `; 
    });
    resultados.innerHTML = data;
})