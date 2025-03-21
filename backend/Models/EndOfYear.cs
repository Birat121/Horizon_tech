using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class EndOfYear
{
    public decimal TransId { get; set; }

    public DateTime StartOfYear { get; set; }

    public DateTime EndOfYear1 { get; set; }

    public string? StartOfProcess { get; set; }

    public string? EndOfProcess { get; set; }

    public string? Remarks { get; set; }
}
