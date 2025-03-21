using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class HsalesI
{
    public decimal TransId { get; set; }

    public DateTime InvoiceDate { get; set; }

    public string InvoiceNo { get; set; } = null!;

    public decimal SubTotal { get; set; }

    public decimal? DiscPer { get; set; }

    public decimal? DiscAmt { get; set; }

    public decimal SubTotalAdisc { get; set; }

    public decimal VatAmt { get; set; }

    public decimal GrandTotal { get; set; }

    public decimal? DiscPerAvat { get; set; }

    public decimal? DiscAmtAvat { get; set; }

    public decimal NetReceived { get; set; }

    public string? RateType { get; set; }

    public string? PaymentType { get; set; }

    public string? CustomerCode { get; set; }

    public string? ContraCode { get; set; }

    public string? DebitorsAc { get; set; }

    public decimal? PrintCopy { get; set; }

    public string? EntryBy { get; set; }

    public DateTime EntryDate { get; set; }

    public string? IsDeleted { get; set; }
}
