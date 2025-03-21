using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class PurAddCostDetail
{
    public decimal TransId { get; set; }

    public string TransNo { get; set; } = null!;

    public DateTime TrDt { get; set; }

    public string RefNo { get; set; } = null!;

    public string DrLedId { get; set; } = null!;

    public string ProductId { get; set; } = null!;

    public decimal Amt { get; set; }

    public DateTime EntDt { get; set; }

    public string? EntBy { get; set; }

    public string? EntPc { get; set; }

    public string? IsDel { get; set; }
}
