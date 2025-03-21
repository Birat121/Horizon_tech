using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class MonthDt
{
    public decimal TransId { get; set; }

    public DateTime? MinDt { get; set; }

    public DateTime? MaxDt { get; set; }

    public string? Mname { get; set; }

    public decimal? Myear { get; set; }

    public string? Remarks { get; set; }
}
