public with sharing class ContactController {
    
    // AuraEnabled Notation Called When you need to call the method inside LWC
    // cacheable=true- That Help you Cashes a List of returned Object
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String accId){ // Get Contacts Based on Account Id.
        try {

            return[
                SELECT AccountId, Id ,FirstName , LastName
                From Contact
                WHERE AccountId =: accId
                WITH SECURITY_ENFORCED
            ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}