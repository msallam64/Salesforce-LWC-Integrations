
// urlMapping is added to request endpoint to call that class
@RestResource(urlMapping='/studentInfo/*')
global class RestStudentExposeClass {
    // This Class is Example of Expose a Class as REST Services 

    // Method To Get Student by Id passing from the request
    // 1- Create a class as Model to send back it to the request, Add all fields that will be backed to the request
    global class studentInfo {

        String studentName{get;set;}
        String studentAddress{get;set;}
        String studentPhone{get;set;}
        String studentSchoolId{get;set;}
        String studentSchoolName{get;set;}
        
    }

    // 2- Create Method with type of your model,Add specific notation(here will use get) to provide data to the request
    @HttpGet
    global static studentInfo getStudent(){
        // Fetch The Request
        RestRequest request= RestContext.Request;
        // Get the Id passing in the request URI
        String studentId;
        studentId = request.requestURI.substring(request.requestURI.lastIndexOf('/')+1);
        // Query Specific Record by Id
        Student__c student = [SELECT Id,Name,Address__c,Phone_Number__c,School__c,School__r.Name FROM Student__c 
                              WHERE Id =: studentId];
        // Setup Model to return
        studentInfo studentRecord = new studentInfo();
        studentRecord.studentName = student.Name;
        studentRecord.studentAddress = student.Address__c;
        studentRecord.studentPhone = student.Phone_Number__c;
        studentRecord.studentSchoolId = student.School__c;
        studentRecord.studentSchoolName = student.School__r.Name;

        // Return your Data
        return studentRecord;
    }

    // The End Point to Call the above is https://<INSTANCE>/services/apexrest/<urlMapping>/<Record ID>
    // Example: https://cunning-raccoon-rs8z1b-dev-ed.trailblaze.my.salesforce.com/services/apexrest/studentInfo/a068e000000voTeAAI
}