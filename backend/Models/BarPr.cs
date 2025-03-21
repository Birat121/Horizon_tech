using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class BarPr
{
    public decimal TransId { get; set; }

    public string TransNo { get; set; } = null!;

    public string Pid { get; set; } = null!;

    public string Pname { get; set; } = null!;

    public decimal Rate { get; set; }

    public int Qty { get; set; }

    public DateTime Pdate { get; set; }

    public string? EnteredBy { get; set; }

    public string? EnteredSys { get; set; }
}
