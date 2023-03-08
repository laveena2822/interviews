public with sharing class Controller {

    @AuraEnabled(cacheable=true)
    public static QuoteDto getQuoteByQuoteId(Id quoteId){
        try {
            Quote__c quote = [SELECT Id, Name, EndDate__c, StartDate__c FROM Quote__c WHERE Id=:quoteId];
            QuoteDto dto = new QuoteDto(quote);
            return dto;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable=false)
    public static QuoteDto updateQuote(Quote__c quote){
        try {
            QuoteDto dto = new QuoteDto(quote);
            database.update(dto.sObj);
            return dto;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}