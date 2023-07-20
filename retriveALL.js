let all = [
    {"index": "1", "schoolName": "STI College", "strand": "Technical-Vocational-Livelihood Track"},
    {"index": "2", "schoolName": "AMA Computer Learning Center", "strand": "Sports Track"},
    {"index": "3", "schoolName": "Seed Academy", "strand": "Technical-Vocational-Livelihood Track"},
    {"index": "4", "schoolName": "St. Mary of the Woods School", "strand": "Science, Technology, Engineering, and Mathematics Strand"},
    {"index": "5", "schoolName": "AMA Computer College", "strand": "Technical-Vocational-Livelihood Track"},
]

let newschoolname = localStorage.getItem('schoolname');
let newstrand = localStorage.getItem('strand');

all.push({"index": '6', "schoolName": newschoolname, "strand": newstrand});
console.log(all);

let parentDiv = document.getElementById('scaffold');
for (let index = 0; index < all.length; index++) {
    let div = document.createElement('div');
    div.className = 'res';

    let number = document.createElement('p');
    number.innerHTML = index + 1;

    let school = document.createElement('p');
    school.innerHTML = all[index].schoolName;

    let strand = document.createElement('p');
    strand.innerHTML = all[index].strand;

    div.appendChild(number);
    div.appendChild(school);
    div.appendChild(strand);
    parentDiv.appendChild(div);
}

