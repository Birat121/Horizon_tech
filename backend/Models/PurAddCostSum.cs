using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class PurAddCostSum
{
    public decimal TransId { get; set; }

    public string TransNo { get; set; } = null!;

    public DateTime TrDt { get; set; }

    public string RefNo { get; set; } = null!;

    public string? DocNo { get; set; }

    public string? Rmk { get; set; }

    public string DrLedId { get; set; } = null!;

    public string CrLedId { get; set; } = null!;

    public string SubLedId { get; set; } = null!;

    public decimal Amt { get; set; }

    public DateTime EntDt { get; set; }

    public string? EntBy { get; set; }

    public string? EntPc { get; set; }

    public string? IsDel { get; set; }

    public decimal AmtFyc { get; set; }

    public string? CurrName { get; set; }

    public decimal ExcRate { get; set; }
}
