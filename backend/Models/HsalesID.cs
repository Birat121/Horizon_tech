using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class HsalesID
{
    public decimal TransId { get; set; }

    public DateTime InvoiceDate { get; set; }

    public string InvoiceNo { get; set; } = null!;

    public string ProductId { get; set; } = null!;

    public decimal SaleQ { get; set; }

    public string Uom { get; set; } = null!;

    public decimal PackQty { get; set; }

    public decimal UnitRate { get; set; }

    public decimal ItemTotal { get; set; }

    public decimal ItemVat { get; set; }

    public decimal ItemGtotal { get; set; }

    public decimal? WeAvrC { get; set; }

    public decimal? WeAvrP { get; set; }

    public string EntryBy { get; set; } = null!;

    public DateTime EntDate { get; set; }

    public string? IsDeleted { get; set; }
}
