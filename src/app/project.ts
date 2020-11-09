export class Project {
    showProjectDetails: boolean;
    constructor(public title: string, public description: string, public role: string, public date: string) { 
        this.showProjectDetails =  false;
    }
}