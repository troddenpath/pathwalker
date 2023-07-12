let data = [
  {"schoolName": "St. Mary's Academy", "city": "Caloocan City", "schoolID": 406685},
  {"schoolName": "St. Clare College", "city": "Caloocan City", "schoolID": 406717},
  {"schoolName": "La Consolacion Colleges - Novaliches", "city": "Caloocan City", "schoolID": 406734},
  {"schoolName": "St. Mary Goretti School", "city": "Caloocan City", "schoolID": 483517},
  {"schoolName": "University of the East", "city": "Caloocan City", "schoolID": 483559},
  {"schoolName": "Ridgewood School", "city": "Caloocan City", "schoolID": 483569},
  {"schoolName": "SoFa Design Institute", "city": "City of Makati", "schoolID": 401728},
  {"schoolName": "University of Perpetual Help System Dalta", "city": "Las Piñas City", "schoolID": 407107},
  {"schoolName": "Career Academy Asia - PHINMA Education", "city": "Makati City", "schoolID": 401056},
  {"schoolName": "iAcademy, Belair", "city": "Makati City", "schoolID": 401067},
  {"schoolName": "St. Mary of the Woods School", "city": "Makati City", "schoolID": 406863},
  {"schoolName": "University of Makati", "city": "Makati City", "schoolID": 600305},
  {"schoolName": "Lyceum of the Philippines University", "city": "Malate", "schoolID": 401188},
  {"schoolName": "St. Paul University", "city": "Malate", "schoolID": 401293},
  {"schoolName": "Jesus Reigns Christian Academy", "city": "Malate", "schoolID": 406364},
  {"schoolName": "Philippine Women's University", "city": "Malate", "schoolID": 406368},
  {"schoolName": "St. Scholastica's College", "city": "Malate", "schoolID": 406371},
  {"schoolName": "Arellano University", "city": "Mandaluyong City", "schoolID": 406753},
  {"schoolName": "Jose Rizal University", "city": "Mandaluyong City", "schoolID": 406757},
  {"schoolName": "College of the Holy Spirit", "city": "Manila City", "schoolID": 482043},
  {"schoolName": "Charis School", "city": "Marikina City", "schoolID": 406784},
  {"schoolName": "Marist School", "city": "Marikina City", "schoolID": 406789},
  {"schoolName": "St. Scholastica's Academy", "city": "Marikina City", "schoolID": 407467},
  {"schoolName": "Mary, Cause of Our Joy Catholic School", "city": "Muntinlupa City", "schoolID": 407324},
  {"schoolName": "Southernside Montessori School", "city": "Muntinlupa City", "schoolID": 407336},
  {"schoolName": "De La Salle Santiago Zobel School", "city": "Muntinlupa City", "schoolID": 407349},
  {"schoolName": "Saint Bernadette College", "city": "Muntinlupa City", "schoolID": 407365},
  {"schoolName": "Concordia College", "city": "Paco", "schoolID": 406377},
  {"schoolName": "Arandia College", "city": "Parañaque City", "schoolID": 406973},
  {"schoolName": "International Christian Academy", "city": "Parañaque City", "schoolID": 407019},
  {"schoolName": "St. Paul College", "city": "Parañaque City", "schoolID": 407059},
  {"schoolName": "ICLA Christian Academy", "city": "Parañaque City", "schoolID": 486052},
  {"schoolName": "Singapore School", "city": "Parañaque City", "schoolID": 486071},
  {"schoolName": "Arellano University - Apolinario Mabini Campus", "city": "Pasay City", "schoolID": 406648},
  {"schoolName": "St. Mary's Academy", "city": "Pasay City", "schoolID": 406654},
  {"schoolName": "Pasig Catholic College", "city": "Pasig City", "schoolID": 406889},
  {"schoolName": "St. Paul College", "city": "Pasig City", "schoolID": 406905},
  {"schoolName": "Arellano University", "city": "Pasig City", "schoolID": 406938},
  {"schoolName": "Pasig Christian Academy", "city": "Pasig City", "schoolID": 406943},
  {"schoolName": "Pateros Catholic School", "city": "Pateros", "schoolID": 407299},
  {"schoolName": "Bestlink College of the Philippines", "city": "Quezon City", "schoolID": 401453},
  {"schoolName": "Datamex Institute of Computer Technology", "city": "Quezon City", "schoolID": 401458},
  {"schoolName": "Quezon City Polytechnic University", "city": "Quezon City", "schoolID": 406081},
  {"schoolName": "Philippine Women's University", "city": "Quezon City", "schoolID": 406407},
  {"schoolName": "New Era University", "city": "Quezon City", "schoolID": 406432},
  {"schoolName": "School of the Holy Spirit", "city": "Quezon City", "schoolID": 406555},
  {"schoolName": "TD&S Hope Christian Academy", "city": "Quezon City", "schoolID": 406570},
  {"schoolName": "Holy Spirit School", "city": "Quezon City", "schoolID": 406616},
  {"schoolName": "St. Paul University", "city": "Quezon City", "schoolID": 406622},
  {"schoolName": "St. Mary's College", "city": "Quezon City", "schoolID": 406632},
  {"schoolName": "Saint Joseph's College", "city": "Quezon City", "schoolID": 40644},
  {"schoolName": "Bloomridge Integrated School", "city": "Quezon City", "schoolID": 482607},
  {"schoolName": "Datamex College of Saint Adeline", "city": "Quezon City", "schoolID": 482971},
  {"schoolName": "Far Eastern University High School", "city": "Quezon City", "schoolID": 401168},
  {"schoolName": "Arellano University", "city": "Sampaloc", "schoolID": 406306},
  {"schoolName": "Dominican School", "city": "Sampaloc", "schoolID": 406342},
  {"schoolName": "Perpetual Help College", "city": "Sampaloc", "schoolID": 406343},
  {"schoolName": "University of Santo Tomas", "city": "Sampaloc", "schoolID": 482072},
  {"schoolName": "Polytechnic University of the Philippines", "city": "Sampaloc", "schoolID": 600112},
  {"schoolName": "Community of Learners School of Children", "city": "San Juan City", "schoolID": 406615},
  {"schoolName": "Aquinas School", "city": "San Juan City", "schoolID": 406956},
  {"schoolName": "Metropolitan Medical Center College of Arts, Science and Technology", "city": "San Cruz", "schoolID": 401215},
  {"schoolName": "Meridian International College", "city": "Taguig City", "schoolID": 406692},
  {"schoolName": "Noah's Academy", "city": "Taguig City", "schoolID": 488014},
  {"schoolName": "Chiang Kai Shek College", "city": "Tondo", "schoolID": 406301},
  {"schoolName": "Pamantasan Lungsod ng Valenzuela", "city": "Valenzuela City", "schoolID": 401705},
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


