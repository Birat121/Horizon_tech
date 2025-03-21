using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class PurchaseReturn
{
    public decimal TransId { get; set; }

    public DateTime? ReturnDate { get; set; }

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

    public decimal? NetReturn { get; set; }

    public string? PaymentType { get; set; }

    public string? VendorId { get; set; }

    public string? ContraCode { get; set; }

    public string? CreditorsAc { get; set; }

    public decimal? PrintCopy { get; set; }

    public string? EntryBy { get; set; }

    public DateTime? EntryDate { get; set; }

    public string? ModifyBy { get; set; }

    public DateTime? ModifyDate { get; set; }

    public decimal? Taxable { get; set; }

    public decimal? NonTax { get; set; }

    public string? MrnNo { get; set; }

    public string? BranchCode { get; set; }
}
