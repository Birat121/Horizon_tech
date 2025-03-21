using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class StockAdj7677
{
    public decimal TransId { get; set; }

    public string? ProductId { get; set; }

    public decimal? BookQty { get; set; }

    public decimal? AdjustQty { get; set; }

    public string? Remarks { get; set; }

    public string? EntryBy { get; set; }

    public DateTime? EntryDate { get; set; }
}
