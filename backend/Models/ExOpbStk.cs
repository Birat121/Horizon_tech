using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ExOpbStk
{
    public decimal TransId { get; set; }

    public string? ProductName { get; set; }

    public decimal? Qty { get; set; }

    public decimal? Rate { get; set; }

    public decimal? TAmt { get; set; }

    public string? FilePath { get; set; }

    public DateTime? EntSoftDate { get; set; }

    public DateTime EntSysDate { get; set; }
}
