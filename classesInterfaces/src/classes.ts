class Department {
    protected employees: string[] = [];
    constructor(private readonly id: string, private name:string) {
        
    }
    describe(this: Department){
        console.info(`Department: ${this.id}, ${this.name}`);
    }
    addEmployee(this: Department, employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation(this: Department) {
        console.info(`Numer of employees: ${this.employees.length}`);
        console.info('Employees data: ', this.employees);
    }
    static creatEmployee (name: string) {
        return {
            name,
            id: new Date().toISOString()
        }
    }
}
const consulting = new Department('C-TechC', 'Consulting'); 
console.info(consulting);
consulting.describe();

consulting.addEmployee('Daniel');
consulting.addEmployee('Leonardo');
consulting.addEmployee('Roberto');
consulting.printEmployeeInformation();


class ItDepartment extends Department {
    reports: string[] = [];
    admins: string[] = [];
    lastReport: string = '';

    constructor(id: string, admins: string[]){
        super(id, 'TI');
        this.admins = admins;
    }

    get mostRecentReport () {
        if(this.lastReport) {
            return this.lastReport;
        }
        return 'No reports have been added';
    }

    set mostRecentReport (report: string) {
        this.lastReport = report;
    }

    setReport(this: ItDepartment, report: string) {
        this.reports.push(report)
        this.mostRecentReport = report;
    }

    printReports(this: ItDepartment) {
        console.info('Reporst: ', this.reports)
    }
}

const ConsultingIt = new ItDepartment('IT-C-TechC', ['Marvin', 'Mayra']);
ConsultingIt.setReport('Creación de accesos');
ConsultingIt.printReports();
ConsultingIt.addEmployee('Florencia');
ConsultingIt.addEmployee('Silvano');
ConsultingIt.printEmployeeInformation();
console.info('Last report: ', ConsultingIt.mostRecentReport);

const newEmployee = ItDepartment.creatEmployee('Valeriana');
console.info('newEmployee', newEmployee);

