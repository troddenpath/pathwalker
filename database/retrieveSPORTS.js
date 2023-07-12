let data = [
    {"schoolName": "Datamex Institute of Computer Technology", "city": "Caloocan City", "schoolID": 400960},
    {"schoolName": "St. Mary's Academy", "city": "Caloocan City", "schoolID": 406685},
    {"schoolName": "St. Clare College", "city": "Caloocan City", "schoolID": 406717},
    {"schoolName": "Immaculada Concepcion Colleges", "city": "Caloocan City", "schoolID": 406729},
    {"schoolName": "La Consolacion Colleges - Novaliches", "city": "Caloocan City", "schoolID": 406734},
    {"schoolName": "Rosary Hills International School", "city": "Caloocan City", "schoolID": 406735},
    {"schoolName": "St. Mary Goretti School", "city": "Caloocan City", "schoolID": 483517},
    {"schoolName": "Escuela de Sophia", "city": "Caloocan City", "schoolID": 483550},
    {"schoolName": "University of the East", "city": "Caloocan City", "schoolID": 483559},
    {"schoolName": "Our Lady of Grace School", "city": "Caloocan City", "schoolID": 483653},
    {"schoolName": "University of Perpetual Help System Dalta", "city": "Las Piñas City", "schoolID": 407107},
    {"schoolName": "Las Piñas College", "city": "Las Piñas City", "schoolID": 407124},
    {"schoolName": "University of Makati", "city": "Makati City", "schoolID": 600305},
    {"schoolName": "Emilio Aguinaldo College", "city": "Malate", "schoolID": 401160},
    {"schoolName": "Lyceum of the Philippines University", "city": "Malate", "schoolID": 401188},
    {"schoolName": "Philippine Christian School", "city": "Malate", "schoolID": 406367},
    {"schoolName": "Philippine Women's University", "city": "Malate", "schoolID": 406368},
    {"schoolName": "St. Scholastica's College", "city": "Malate", "schoolID": 406371},
    {"schoolName": "Arellano University", "city": "Mandaluyong City", "schoolID": 406753},
    {"schoolName": "Jose Rizal University", "city": "Mandaluyong City", "schoolID": 406757},
    {"schoolName": "Rizal Technological University", "city": "Mandaluyong City", "schoolID": 600110},
    {"schoolName": "Marist School", "city": "Marikina City", "schoolID": 406789},
    {"schoolName": "Christ the King College of Science and Technology", "city": "Muntinlupa City", "schoolID": 401369},
    {"schoolName": "San Beda College", "city": "Muntinlupa City", "schoolID": 407364},
    {"schoolName": "Lyceum of Alabang", "city": "Muntinlupa City", "schoolID": 488551},
    {"schoolName": "Olivarez College", "city": "Parañaque City", "schoolID": 407041},
    {"schoolName": "Arellano University - Apolinario Mabini Campus", "city": "Pasay City", "schoolID": 406648},
    {"schoolName": "St. Mary's Academy", "city": "Pasay City", "schoolID": 406654},
    {"schoolName": "Pasig Catholic College", "city": "Pasig City", "schoolID": 406889},
    {"schoolName": "St. Paul College", "city": "Pasig City", "schoolID": 406905},
    {"schoolName": "Arellano University", "city": "Pasig City", "schoolID": 406938},
    {"schoolName": "La Consolacion College", "city": "Pasig City", "schoolID": 406939},
    {"schoolName": "Datamex Institute of Computer Technology", "city": "Quezon City", "schoolID": 401458},
    {"schoolName": "Philippine Women's University", "city": "Quezon City", "schoolID": 406407},
    {"schoolName": "St. Vincent School", "city": "Quezon City", "schoolID": 406409},
    {"schoolName": "New Era University", "city": "Quezon City", "schoolID": 406432},
    {"schoolName": "Metro Manila College", "city": "Quezon City", "schoolID": 406482},
    {"schoolName": "Far Eastern University", "city": "Quezon City", "schoolID": 406513},
    {"schoolName": "TD&S Hope Christian Academy", "city": "Quezon City", "schoolID": 406570},
    {"schoolName": "St. Paul University", "city": "Quezon City", "schoolID": 406622},
    {"schoolName": "Bloomridge Integrated School", "city": "Quezon City", "schoolID": 482607},
    {"schoolName": "Datamex College of Saint Adeline", "city": "Quezon City", "schoolID": 482971},
    {"schoolName": "Arellano University", "city": "Sampaloc", "schoolID": 406306},
    {"schoolName": "Dominican School", "city": "Sampaloc", "schoolID": 406342},
    {"schoolName": "Perpetual Help College", "city": "Sampaloc", "schoolID": 406343},
    {"schoolName": "University of Santo Tomas", "city": "Sampaloc", "schoolID": 482072},
    {"schoolName": "Polytechnic University of the Philippines", "city": "Sampaloc", "schoolID": 600112},
    {"schoolName": "Aquinas School", "city": "San Juan City", "schoolID": 406956},
    {"schoolName": "University of the East", "city": "Santa Cruz", "schoolID": 406313},
    {"schoolName": "Chiang Kai Shek College", "city": "Tondo", "schoolID": 406301},
    {"schoolName": "Valenzuela Christian School", "city": "Valenzuela City", "schoolID": 407204},
    
  ]
  
  let parentDiv = document.getElementById('data');
  
  for (let index = 0; index < data.length; index++) {
    let div = document.createElement('div');
    div.className = 'schoolcard';
  
    let h1 = document.createElement('h1');
    h1.className = 'schoolname';
    h1.innerHTML = data[index].schoolName;
  
    let addr = document.createElement('p');
    addr.className = 'schooladdr'
    addr.innerHTML = data[index].city;
  
    let id = document.createElement('p');
    id.className = 'schoolid'
    id.innerHTML = data[index].schoolID;
  
    div.appendChild(h1);
    div.appendChild(addr);
    div.appendChild(id);
    parentDiv.appendChild(div);
  }
  
  
  