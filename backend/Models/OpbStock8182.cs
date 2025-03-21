using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class OpbStock8182
{
    public decimal TransId { get; set; }

    public string? ProductId { get; set; }

    public decimal Qty { get; set; }

    public decimal? StockAmt { get; set; }

    public string? Remarks { get; set; }

    public DateTime? ClosingDate { get; set; }

    public string BranchId { get; set; } = null!;

    public string? LocId { get; set; }

    public string? BatchId { get; set; }
}
