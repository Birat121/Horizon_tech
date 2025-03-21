using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class SubLedMast
{
    public decimal TransId { get; set; }

    public string SubLedId { get; set; } = null!;

    public string LedName { get; set; } = null!;

    public string Add1 { get; set; } = null!;

    public string? Mob { get; set; }

    public string? PanNo { get; set; }

    public string? Remarks { get; set; }

    public DateTime EntDt { get; set; }

    public string? EntBy { get; set; }

    public string? EntPc { get; set; }

    public string? IsDel { get; set; }
}
