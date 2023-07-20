let GAS = 0, ART = 0, SPT = 0, TVL = 0, unanswered = 0;
let GEN = 0, HUM = 0, STEM = 0, ABM = 0;

window.addEventListener('DOMContentLoaded', function() {

    var scrollButton = document.getElementById('scrollButton');
    var contentSection = document.getElementById('content');
  
    if (contentSection === null) {
      console.log("Element with ID 'content' not found.");
      return;
    }
  
    scrollButton.addEventListener('click', function() {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    });

    window.history.scrollRestoration = 'manual';
    window.addEventListener('beforeunload', function() {
      window.scrollTo(0, 0);
    });

    window.onscroll = function isInViewport() {
      var title = "titlepage";
      var element = document.getElementById(title);
  
      if (element === null) {
        console.log("Element with ID '" + title + "' not found.");
        return;
      }
  
      var rect = element.getBoundingClientRect();
      var isinview = (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
      );
  
      if (isinview) {
        console.log("Tracking title");
      } else {
        element.remove();
      }
    };
  });



function get(id) {
    return document.getElementById(id).checked;
}

function firstassess() {
    if (get('q1c1')) {
        GAS--;
        ART++;
    } else if (get('q1c2')) {
        GAS++;
        ART--;
    } else if (get('q1c3')) {
        GAS++;
        ART--;
    } else if (get('q1c4')) {
        GAS--;
        ART++;
    } else if (get('q1c5')) {
        GAS--;
        ART++;
    } else if (get('q1c6')) {
        GAS++;
        ART--;
    } else {
        unanswered++;
    }
    
    if (get('q2c1')) {
        SPT++;
    } else if (get('q2c2')) {
        GAS++;
    } else if (get('q2c3')) {
        ART++;
    } else if (get('q2c4')) {
        TVL++;
    } else {
        unanswered++;
    }
    
    if (get('q3c1')) {
        GAS++;
    } else if (get('q3c2')) {
        GAS+= 3;
    } else if (get('q3c3')) {
        GAS += 4;
    } else if (get('q3c4')) {
        GAS += 2;
    } else {
        unanswered++;
    }
    
    if (get('q4c1')) {
        TVL++;
        SPT--;
    } else if (get('q4c2')) {
        TVL--;
        SPT++;
    } else if (get('q4c3')) {
        TVL--;
        SPT++;
    } else if (get('q4c4')) {
        TVL++;
        SPT--;
    } else {
        unanswered++;
    }
    
    if (get('q5c1')) {
        SPT++;
    } else if (get('q5c2')) {
        ART++;
    } else if (get('q5c3')) {
        GAS++;
    } else if (get('q5c4')) {
        GAS++;
    } else if (get('q5c5')) {
        TVL++;
    } else if (get('q5c6')) {
        GAS++;
    } else if (get('q5c7')) {
        GAS++;
    } else if (get('q5c8')) {
        TVL++;
    } else if (get('q5c9')) {
        TVL++;
    } else {
        unanswered++;
    }
    
    if (get('q6c1')) {
        TVL++;
    } else if (get('q6c2')) {
        TVL += 4;
    } else if (get('q6c3')) {
        TVL += 3;
    } else if (get('q6c4')) {
        TVL += 2;
    } else {
        unanswered++;
    }
    
    if (get('q7c1')) {
        GAS--;
        ART++;
    } else if (get('q7c2')) {
        GAS++;
        ART--;
    } else if (get('q7c3')) {
        GAS--;
        ART++;
    } else if (get('q7c4')) {
        GAS++;
        ART--;
    } else {
        unanswered++;
    }
    
    if (get('q8c1')) {
        GAS++;
    } else if (get('q8c2')) {
        ART++;
    } else if (get('q8c3')) {
        TVL++;
    } else if (get('q8c4')) {
        SPT++;
    } else {
        unanswered++;
    }
    
    if (get('q9c1')) {
        ART++;
    } else if (get('q9c2')) {
        ART += 2;
    } else if (get('q9c3')) {
        ART += 3;
    } else if (get('q9c4')) {
        ART += 4;
    } else {
        unanswered++;
    }
    
    if (get('q10c1')) {
        SPT++;
        TVL--;
    } else if (get('q10c2')) {
        SPT--;
        TVL++;
    } else if (get('q10c3')) {
        SPT++;
        TVL--;
    } else if (get('q10c4')) {
        SPT--;
        TVL++;
    } else {
        unanswered++;
    }
    
    if (get('q11c1')) {
        GAS++;
    } else if (get('q11c2')) {
        ART++;
    } else if (get('q11c3')) {
        TVL++;
    } else if (get('q11c4')) {
        SPT++;
    } else {
        unanswered++;
    }
    
    if (get('q12c1')) {
        SPT++;
    } else if (get('q12c2')) {
        SPT += 2;
    } else if (get('q12c3')) {
        SPT += 3;
    } else if (get('q12c4')) {
        SPT += 4;
    } else {
        unanswered++;
    }

    let skillanswered = false;
    for (let index = 1; index <= 16; index++) {
        let id = "skill" + index;
        if (get(id)) {
            skillanswered = true;
            if (index >= 1 || index <= 4) {
                GAS++;
            }
            if (index >= 5 || index <= 8) {
                ART++;
            }
            if (index >= 9 || index <= 12) {
                SPT++;
            }
            if (index >= 13 || index <= 16) {
                TVL++;
            }
            if (index == 5 || index == 11 || index == 15) {
                GAS++;
            }
            if (index == 2 || index == 12 || index == 14) {
                ART++;
            }
            if (index == 4 || index == 7 || index == 16) {
                SPT++;
            }
            if (index == 1 || index == 6 || index == 10) {
                TVL++;
            }
        }
    }

    if (skillanswered != true) {
        unanswered++;
    }

    console.log("GAS: ", GAS);
    console.log("ART: ", ART);
    console.log("SPT: ", SPT);
    console.log("TVL: ", TVL);
    console.log("Unanswered: ", unanswered);

    if (unanswered > 0) {
        GAS = 0;
        ART = 0;
        SPT = 0;
        TVL = 0;
        unanswered = 0;

        alert('Please provide at least one answer to each question!');

    }

    preservescores();

    decidetrack();
}

function decidetrack() {
    if (GAS > ART && GAS > SPT && GAS > TVL) {
        window.location = "./tracks/gasassessment.html";
    } else if (ART > GAS && ART > SPT && ART > TVL) {
        window.location = "./tracks/artassessment.html";
    } else if (SPT > GAS && SPT > ART && SPT > TVL) {
        window.location = "./tracks/sptassessment.html";
    } else if (TVL > GAS && TVL > ART && TVL > SPT) {
        window.location = "./tracks/tvlassessment.html";
    } else {
        alert('There is a tie between strands. Please check more skills or change your answers.')
        GAS = 0;
        ART = 0;
        SPT = 0;
        TVL = 0;
        localStorage.setItem('gas', GAS);
        localStorage.setItem('art', ART);
        localStorage.setItem('spt', SPT);
        localStorage.setItem('tvl', TVL);
        localStorage.setItem('UNANSWERED', unanswered);
        console.log("Not resolved.")
    }
}

function preservescores() {
    localStorage.setItem('gas', GAS);
    localStorage.setItem('art', ART);
    localStorage.setItem('spt', SPT);
    localStorage.setItem('tvl', TVL);
    localStorage.setItem('UNANSWERED', unanswered);
}

function checkscores() {
    GAS = parseInt(localStorage.getItem('gas'));
    ART = parseInt(localStorage.getItem('art'));
    SPT = parseInt(localStorage.getItem('spt'));
    TVL = parseInt(localStorage.getItem('tvl'));
    unanswered = parseInt(localStorage.getItem('UNANSWERED'));
    console.log("GAS: ", GAS);
    console.log("ART: ", ART);
    console.log("SPT: ", SPT);
    console.log("TVL: ", TVL);
    console.log("Unanswered: ", unanswered);
    if (unanswered > 0 || unanswered == null) {
        window.location = "../index.html";
    }
}

function preservesecondscores() {
    localStorage.setItem('gen', GEN);
    localStorage.setItem('hum', HUM);
    localStorage.setItem('stem', STEM);
    localStorage.setItem('abm', ABM);
    localStorage.setItem('UNANSWERED', unanswered);
}

function checksecondscores() {
    let gen, hum, stem, abm, UNANSWERED;
    GEN = parseInt(localStorage.getItem('gen'));
    HUM = parseInt(localStorage.getItem('hum'));
    STEM = parseInt(localStorage.getItem('stem'));
    ABM = parseInt(localStorage.getItem('abm'));
    unanswered = parseInt(localStorage.getItem('UNANSWERED'));
    console.log("GEN: ", GEN);
    console.log("HUM: ", HUM);
    console.log("STEM: ", STEM);
    console.log("ABM: ", ABM);
    console.log("Unanswered: ", unanswered);
    if (unanswered > 0 || unanswered == null) {
        window.location = "../index.html";
    }
}

window.onload = function() {
    var pageTitle = document.title;
    if (pageTitle === 'Path Walker - ACADEMIC STRAND') {
        checkscores();
    } else if (pageTitle === 'Path Walker - TECHNICAL-VOCATIONAL LIVELIHOOD') {
        checkscores();
    } else if (pageTitle === 'Path Walker - ARTS AND DESIGN') {
        checkscores();
    } else if (pageTitle === 'Path Walker - SPORTS') {
        checkscores();
    } else if (pageTitle === 'Path Walker - GENERAL ACADEMIC STRAND') {
        checksecondscores();
    } else if (pageTitle === 'Path Walker - HUMANITIES AND SOCIAL SCIENCES') {
        checksecondscores();
    } else if (pageTitle === 'Path Walker - SCIENCE, TECHNOLOGY, ENGINEERING, AND MATHEMATICS') {
        checksecondscores();
    } else if (pageTitle === 'Path Walker - ACCOUNTANCY AND BUSINESS MANAGEMENT') {
        checksecondscores();
    } else if (pageTitle === 'Path Walker Results') {
        console.log(localStorage.getItem('strand'));
        console.log(localStorage.getItem('schoolid'));
        console.log(localStorage.getItem('schoolname'));
    } else if (pageTitle === 'Path Walker List') {
        console.log(localStorage.getItem('strand'));
        console.log(localStorage.getItem('schoolname'));
    } else {
        localStorage.clear();
        console.log('Non-assessment page.');
    }
  };



  function secondassess() {
    if (get('as1c1')) {
        ABM++;
    } else if (get('as1c2')) {
        ABM--;
    } else {
        unanswered++;
    }

    if (get('as2c1')) {
        STEM++;
    } else if (get('as2c2')) {
        GEN++;
    } else if (get('as2c3')) {
        ABM++;
    } else if (get('as2c4')) {
        HUM++;
    } else {
        unanswered++;
    }

    if (get('as3c1')) {
        STEM++;
    } else if (get('as3c2')) {
        HUM++;
    } else if (get('as3c3')) {
        ABM++;
    } else if (get('as3c4')) {
        SPT++;
    } else {
        unanswered++;
    }

    if (get('as4c1')) {
        ABM++;
    } else if (get('as4c2')) {
        STEM++;
    } else if (get('as4c3')) {
        ART++;
    } else if (get('as4c4')) {
        ABM++;
    } else {
        unanswered++;
    }

    if (get('as5c1')) {
        ABM++;
    } else if (get('as5c2')) {
        STEM++;
    } else if (get('as5c3')) {
        GEN++;
    } else if (get('as5c4')) {
        ABM++;
    } else {
        unanswered++;
    }

    if (get('as6c1')) {
        HUM++;
    } else if (get('as6c2')) {
        ART++;
    } else if (get('as6c3')) {
        ART++;
    } else if (get('as6c4')) {
        HUM++;
    } else {
        unanswered++;
    }

    if (get('as7c1')) {
        GEN++;
        HUM++;
    } else if (get('as7c2')) {
        GEN--;
        HUM--;
    } else {
        unanswered++;
    }

    if (get('as8c1')) {
        STEM++;
        HUM++;
    } else if (get('as8c2')) {
        STEM--;
        HUM--;
    } else {
        unanswered++;
    }

    if (get('as9c1')) {
        GEN++;
    } else if (get('as9c2')) {
        STEM++;
    } else if (get('as9c3')) {
        HUM++;
    } else if (get('as9c4')) {
        ABM++;
    } else {
        unanswered++;
    }

    if (get('as10c1')) {
        STEM++;
        HUM++;
    } else if (get('as10c2')) {
        ABM++;
    } else if (get('as10c3')) {
        HUM++;
        GEN++;
    } else if (get('as10c4')) {
        GEN++;
    } else {
        unanswered++;
    }

    if (get('as11c1')) {
        ABM++;
        STEM++;
    } else if (get('as11c2')) {
        STEM++;
        ABM++;
    } else if (get('as11c3')) {
        HUM++;
        GEN++;
    } else if (get('as11c4')) {
        STEM++;
        GEN++;
    } else {
        unanswered++;
    }

    if (get('as12c1')) {
        STEM++;
    } else if (get('as12c2')) {
        HUM++;
    } else {
        unanswered++;
    }

    if (get('as13c1')) {
        STEM++;
    } else if (get('as13c2')) {
        STEM++;
        STEM++;
    } else if (get('as13c3')) {
        HUM++;
        HUM++;
    } else if (get('as13c4')) {
        ABM++;
        ABM++;
    } else {
        unanswered++;
    }
    
    if (get('as14c1')) {
        ABM++;
        ABM++;
    } else if (get('as14c2')) {
        ABM--;
    } else {
        unanswered++;
    }

    if (get('as15c1')) {
        SPT++;
    } else if (get('as15c2')) {
        STEM++;
        GEN++;
    } else if (get('as15c3')) {
        ABM++;
    } else if (get('as15c4')) {
        STEM++;
        HUM++;
        GEN++;
    } else {
        unanswered++;
    }

    if (get('as16c1')) {
        SPT++;
    } else if (get('as16c2')) {
        ABM++;
        STEM++;
        GEN++;
    } else if (get('as16c3')) {
        STEM++;
    } else if (get('as16c4')) {
        HUM++;
    } else {
        unanswered++;
    }

    if (get('as17c1')) {
        HUM++;
        HUM++;
    } else if (get('as17c2')) {
        HUM--;
    } else {
        unanswered++;
    }

    if (get('as18c1')) {
        HUM++;
        STEM++;
        GEN++;
    } else if (get('as18c2')) {
        HUM++;
        ART++;
    } else if (get('as18c3')) {
        STEM++;
    } else if (get('as18c4')) {
        HUM++;
    } else {
        unanswered++;
    }

    if (get('as19c1')) {
        SPT++;
    } else if (get('as19c2')) {
        HUM++;
        GEN++;
    } else if (get('as19c3')) {
        GEN++;
    } else if (get('as19c4')) {
        STEM++;
    } else {
        unanswered++;
    }

    if (get('as20c1')) {
        HUM++;
        HUM++;
    } else if (get('as20c2')) {
        HUM++;
    } else if (get('as20c3')) {
        HUM--;
    } else if (get('as20c4')) {
        HUM--;
        HUM--;
    } else {
        unanswered++;
    }

    if (unanswered > 0) {
        GEN = 0;
        ABM = 0;
        STEM = 0;
        HUM = 0;
        unanswered = 0;

        alert('Please provide at least one answer to each question!');

    }

    preservesecondscores();

    computestrand();

    decidestrand();

  }

  function computestrand() {
    GAS = parseInt(GAS);
    HUM = parseInt(HUM);
    GEN = parseInt(GEN);
    STEM = parseInt(STEM);
    ABM = parseInt(ABM);

    console.log("GAS: ", GAS);

    console.log("GEN: ", GEN);
    console.log("HUM: ", HUM);
    console.log("STEM: ", STEM);
    console.log("ABM: ", ABM);


    console.log("ART: ", ART);
    console.log("SPT: ", SPT);
    console.log("TVL: ", TVL);
    console.log("Unanswered: ", unanswered);
    
    if (GEN > HUM && GEN > STEM && GEN > ABM) {
        GEN += GAS;
    } else if (HUM > GEN && HUM > STEM && HUM > ABM) {
        HUM += GAS;
    } else if (STEM > GEN && STEM > HUM && STEM > ABM) {
        STEM += GAS;
    } else if (ABM > GEN && ABM > STEM && ABM > HUM) {
        ABM += GAS;
    } else {
        console.log("Not resolved.");
    }
  }

  function decidestrand() {
    if (GEN > ART && GEN > SPT && GEN > TVL && GEN > HUM && GEN > STEM && GEN > ABM) {
        window.location = "../tracks/genassessment.html";
    } else if (HUM > ART && HUM > SPT && HUM > TVL && HUM > GEN && HUM > STEM && HUM > ABM) {
        window.location = "../tracks/humassessment.html";
    } else if (STEM > ART && STEM > SPT && STEM > TVL && STEM > GEN && STEM > HUM && STEM > ABM) {
        window.location = "../tracks/stemassessment.html";
    } else if (ABM > ART && ABM > SPT && ABM > TVL && ABM > GEN && ABM > HUM && ABM > STEM) {
        window.location = "../tracks/abmassessment.html";
    } else {
        console.log("Not resolved.");
    }
  }


  document.addEventListener('DOMContentLoaded', function() {
    let schoolCards = document.querySelectorAll('.schoolcard');
    
    schoolCards.forEach(function(schoolCard) {
      schoolCard.addEventListener('click', function() {
        let schoolid = schoolCard.querySelector('.schoolid').innerText;
        let schoolname = schoolCard.querySelector('.schoolname').innerText;
        let schooladdr = schoolCard.querySelector('.schooladdr').innerText;
        localStorage.setItem('schoolid', schoolid);
        localStorage.setItem('schooladdr', schooladdr);
        localStorage.setItem('schoolname', schoolname);
        console.log(schoolid);
        console.log(schoolname);
        window.location.href = './apply.html';

        let path = window.location.pathname;
        let filename = path.substring(path.lastIndexOf('/') + 1);

        if (filename == 'abmassessment.html') {
            localStorage.setItem('strand', 'Accountancy and Business Management Strand');
        } else if (filename == 'artassessment.html') {
            localStorage.setItem('strand', 'Arts and Design Track');
        } else if (filename == 'genassessment.html') {
            localStorage.setItem('strand', 'General Academic Strand');
        } else if (filename == 'humassessment.html') {
            localStorage.setItem('strand', 'Humanities and Social Sciences Strand');
        } else if (filename == 'sptassessment.html') {
            localStorage.setItem('strand', 'Sports Track');
        } else if (filename == 'stemassessment.html') {
            localStorage.setItem('strand', 'Science, Technology, Engineering, and Mathematics Strand');
        } else if (filename == 'tvlassessment.html') {
            localStorage.setItem('strand', 'Technical-Vocational-Livelihood Track');
        } else {
            console.log('Retry');
        }
      });
    });
  })
