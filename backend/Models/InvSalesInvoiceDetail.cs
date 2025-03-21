using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class InvSalesInvoiceDetail
{
    public decimal TransId { get; set; }

    public DateTime? InvoiceDate { get; set; }

    public string? InvoiceNo { get; set; }

    public string? BillNo { get; set; }

    public string? ProductId { get; set; }

    public decimal? SaleQtyC { get; set; }

    public decimal? SaleQtyP { get; set; }

    public string? Uom { get; set; }

    public decimal? PackQty { get; set; }

    public decimal? UnitRate { get; set; }

    public decimal? ItemTotalBefDisc { get; set; }

    public decimal? ItemDiscPer { get; set; }

    public decimal? ItemDiscAmt { get; set; }

    public decimal? ItemTotalAdisc { get; set; }

    public decimal? ItemVatAmt { get; set; }

    public decimal? ItemGtotal { get; set; }

    public decimal? WeAvrC { get; set; }

    public decimal? WeAvrP { get; set; }

    public string? EntryBy { get; set; }

    public DateTime? EntryDate { get; set; }

    public string? ModifyBy { get; set; }

    public DateTime? ModifyDate { get; set; }

    public decimal Pnt { get; set; }

    public string BranchCode { get; set; } = null!;

    public string? IsDs { get; set; }

    public decimal? OnlTransId { get; set; }

    public string? LocId { get; set; }

    public string? BatchId { get; set; }

    public decimal? Mrp { get; set; }

    public decimal? ItemTaxable { get; set; }

    public decimal? ItemNonTax { get; set; }

    public string? LocName { get; set; }

    public string? BatchName { get; set; }
}
