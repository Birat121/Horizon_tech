using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class InvSalesSummary
{
    public decimal TransId { get; set; }

    public DateTime? InvoiceDate { get; set; }

    public string? InvoiceNo { get; set; }

    public string? BillNo { get; set; }

    public decimal? SubTotal { get; set; }

    public decimal? DiscPer { get; set; }

    public decimal? DiscAmt { get; set; }

    public decimal? SubTotalAdisc { get; set; }

    public decimal? TotalVatAmt { get; set; }

    public decimal? GrandTotal { get; set; }

    public decimal? DiscPerAvat { get; set; }

    public decimal? DiscAmtAvat { get; set; }

    public decimal? NetReceived { get; set; }

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

    public int Counter { get; set; }

    public string BranchCode { get; set; } = null!;

    public string? EntPc { get; set; }

    public string? MacId { get; set; }

    public string Cbmspost { get; set; } = null!;

    public DateTime? PostDateTime { get; set; }

    public string BillType { get; set; } = null!;

    public string? IsRealTime { get; set; }

    public decimal VatRefund { get; set; }

    public string? IsDs { get; set; }

    public decimal? OnlTransId { get; set; }

    public string? VehicleNo { get; set; }

    public string? TermsOfDel { get; set; }

    public string? SalesmanId { get; set; }

    public string? AreaCode { get; set; }

    public string? FinanceBy { get; set; }

    public string? JobCardNo { get; set; }

    public DateTime? LcDate { get; set; }

    public string? LcNo { get; set; }

    public string? LcTerms { get; set; }

    public decimal FareChr { get; set; }

    public decimal OtherChr { get; set; }

    public string? CurrName { get; set; }

    public decimal? ExcRate { get; set; }

    public decimal? Equvalent { get; set; }

    public decimal TermsDay { get; set; }

    public string? Rmk { get; set; }

    public string? SalesType { get; set; }

    public string? Transporter { get; set; }

    public string? DriverName { get; set; }

    public string? LicenseNo { get; set; }

    public string? MobNo { get; set; }
}
