using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ExChartOfAcc
{
    public decimal TransId { get; set; }

    public string? CatName { get; set; }

    public string? GName { get; set; }

    public string? SubGname { get; set; }

    public string? SubGname1 { get; set; }

    public string? SubGname2 { get; set; }

    public string? AccountHead { get; set; }

    public DateTime? EntSoftDate { get; set; }

    public DateTime EntSysDate { get; set; }
}
