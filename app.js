let allgrade=[];
let table = document.getElementById('table');

function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


  function Grades (name,course,stdgrade){
      this.name=name;
      this.course=course;
      this.stdgrade=stdgrade;
      allgrade.push(this);
  }


  let conf = document.getElementById('gradeform');
  conf.addEventListener('submit',handler)

  function handler(event){
      event.preventDefault();
      let newname = event.target.name.value;
      let newcourse = event.target.course.value;
      let newstd = new Grades (newname,newcourse);

      
     
     
      newstd.getgrade();
      newstd.rendertable();
      savegrade();

  }
  //rendering

  Grades.prototype.getgrade = function(){
    this.stdgrade=random(0,100);
}

  Grades.prototype.rendertable = function(){

    for (let i=0; i<allgrade.length; i++){
    
      let newrow = document.createElement('tr');
      table.appendChild(newrow);

      let datacell = document.createElement('td');
      newrow.appendChild(datacell);
      datacell.textContent = allgrade[i].name;

      datacell = document.createElement('td');
      newrow.appendChild(datacell);
      datacell.textContent = allgrade[i].stdgrade;

      datacell = document.createElement('td');
      newrow.appendChild(datacell);
      datacell.textContent = allgrade[i].course;
    
    }

  }


  // local storage

  function savegrade(){
    let sett = JSON.stringify(allgrade);
    localStorage.setItem('grades',sett);
}

  function getgrade(){
      let data = localStorage.getItem('grades');
      let newgrade = JSON.parse(data)
        if (newgrade){}

        
      for (let i=0; i<newgrade.length; i++){
          let newstd = new Grades (newgrade[i].name,newgrade[i].course,newgrade[i].stdgrade)
      }
  }

  
  

  getgrade();