public with sharing class QuoteDto extends BaseDto {
  @AuraEnabled
  public Date endDate;
  @AuraEnabled
  public Date startDate;
  @AuraEnabled
  public String name;
  @AuraEnabled
  public decimal quotedAmount;

  public QuoteDto() {
  }

  public QuoteDto(Quote__c quote) {
    super(quote);
    this.endDate = quote.EndDate__c;
    this.startDate = quote.StartDate__c;
    this.name = quote.Name;
    this.quotedAmount = quote.TotalQuotedAmount__c;
  }

  public override SObject refreshSo() {
    return null;
  }
}
