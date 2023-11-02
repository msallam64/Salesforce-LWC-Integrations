
// In Expose Class must define class as global
global class StudentExposeClass {

    // webService that add global access to method and must be static although
    webService static Student__c getStudentById (String studentId){

        Student__c student = [ 
            SELECT Id,Name,
            Student_Name__c,Phone_Number__c,
            School__c,School__r.Name 
            FROM Student__c 
            WHERE Id =: studentId
            ];
        
        return student;
    }
}