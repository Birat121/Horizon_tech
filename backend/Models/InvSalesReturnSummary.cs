using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class InvSalesReturnSummary
{
    public decimal TransId { get; set; }

    public DateTime? SaleReturnDate { get; set; }

    public string? ReturnNo { get; set; }

    public string? BillNo { get; set; }

    public decimal? SubTotal { get; set; }

    public decimal? DiscPer { get; set; }

    public decimal? DiscAmt { get; set; }

    public decimal? SubTotalAdisc { get; set; }

    public decimal? TotalVatAmt { get; set; }

    public decimal? GrandTotal { get; set; }

    public decimal? DiscPerAvat { get; set; }

    public decimal? DiscAmtAvat { get; set; }

    public decimal? NetReturnAmt { get; set; }

    public string? RateType { get; set; }

    public string? PaymentType { get; set; }

    public string? CustomerCode { get; set; }

    public string? ContraCode { get; set; }

    public string? DebitorsAc { get; set; }

    public string? Fname { get; set; }

    public decimal? PrintCopy { get; set; }

    public string? EntryBy { get; set; }

    public DateTime? EntryDate { get; set; }

    public string? ModifyBy { get; set; }

    public DateTime? ModifyDate { get; set; }

    public decimal? Tender { get; set; }

    public decimal? Change { get; set; }

    public string? ApprCode { get; set; }

    public decimal? Taxable { get; set; }

    public decimal? NonTaxable { get; set; }

    public int? Counter { get; set; }

    public string? BranchCode { get; set; }

    public string? Reason { get; set; }

    public string? EntPc { get; set; }

    public string? MacId { get; set; }

    public string Cbmspost { get; set; } = null!;

    public DateTime? PostDateTime { get; set; }

    public string? IsRealTime { get; set; }

    public decimal VatRefund { get; set; }

    public string? IsDs { get; set; }

    public decimal? OnlTransId { get; set; }

    public string InvNo { get; set; } = null!;

    public string? SalesmanId { get; set; }

    public string? AreaCode { get; set; }

    public string? FinanceBy { get; set; }

    public string? JobCardNo { get; set; }

    public DateTime? LcDate { get; set; }

    public string? LcNo { get; set; }

    public string? LcTerms { get; set; }

    public string? CurrName { get; set; }

    public decimal? ExcRate { get; set; }

    public decimal? Equvalent { get; set; }
}
