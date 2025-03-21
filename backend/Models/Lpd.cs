using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Lpd
{
    public decimal TransId { get; set; }

    public string LogName { get; set; } = null!;

    public string Pwd { get; set; } = null!;

    public string? FullName { get; set; }

    public decimal? AcctStat { get; set; }

    public string? EmpName { get; set; }
}
