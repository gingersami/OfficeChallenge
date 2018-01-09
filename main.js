//write your code here to make the tests pass
var Document = function(employeeName){
    this.employeeName=employeeName
}
var Employee = function(name){
    this.name = name;
    this.work = function(office){
        
        for(let i=0;i<=9;i++){
            office.documents.push(new Document(name))

        }
    }
};


var Manager = function(name){
    this.name = name;
    this.employees = []
    this.hireEmployee = function(name){
         this.employees.push(new Employee(name))
    };
    this.askEmployeesToWork = function (office) {
        // for(let i=0;i<this.employees.length;i++){
        //     this.employees[i].work(office)
        this.employees.forEach(function(worker){
            worker.work(office)

        })
        }
        
    }

var Cleaner = function(name){
    this.name = name
    this.clean=function(){
        console.log('Clean')
    }
}

var Office = function(){
    this.documents = []
    this.managers = []
    this.cleaners = []
    this.hireManager = function(name){
        this.managers.push(new Manager(name));
    }
    this.hireCleaner = function(name){
        this.cleaners.push(new Cleaner(name))
    }
    this.startWorkDay = function(){
        var managersArr = this.managers
        for(let j=0;j<managersArr.length;j++){
            managersArr[j].askEmployeesToWork(this)

        }
    }
}

