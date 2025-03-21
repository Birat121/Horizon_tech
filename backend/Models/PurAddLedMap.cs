using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class PurAddLedMap
{
    public decimal TransId { get; set; }

    public string LedId { get; set; } = null!;

    public DateTime EntDt { get; set; }

    public string? EntBy { get; set; }

    public string? EntPc { get; set; }

    public string? IsDel { get; set; }
}
