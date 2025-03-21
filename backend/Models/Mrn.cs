using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Mrn
{
    public decimal TransId { get; set; }

    public DateTime? Mrndate { get; set; }

    public DateTime? InvoiceDate { get; set; }

    public string? Mrnno { get; set; }

    public string? BillNo { get; set; }

    public string? ProductId { get; set; }

    public decimal? AccptdQty { get; set; }

    public string? Uom { get; set; }

    public decimal? PackQty { get; set; }

    public decimal? PackCost { get; set; }

    public decimal? UnitRate { get; set; }

    public decimal? UnitSale { get; set; }

    public string? Btype { get; set; }

    public decimal? Bqty { get; set; }

    public decimal? ItemTotal { get; set; }

    public decimal? ItemVatAmt { get; set; }

    public decimal? ItemGtotal { get; set; }

    public string? EntryBy { get; set; }

    public DateTime? EntryDate { get; set; }

    public string? ModifyBy { get; set; }

    public DateTime? ModifyDate { get; set; }

    public decimal? ImAmt { get; set; }

    public string? Pono { get; set; }

    public string BranchCode { get; set; } = null!;

    public string? IsDs { get; set; }

    public decimal? OnlTransId { get; set; }

    public string? LocId { get; set; }

    public string? BatchId { get; set; }

    public decimal? Mrp { get; set; }

    public decimal Idp { get; set; }

    public decimal Ida { get; set; }

    public string? LocName { get; set; }

    public string? BatchName { get; set; }

    public decimal PurAddCost { get; set; }

    public decimal TotalFyc { get; set; }
}
