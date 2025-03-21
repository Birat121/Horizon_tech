using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class InvGD
{
    public decimal TransId { get; set; }

    public DateTime TransDate { get; set; }

    public string VRef { get; set; } = null!;

    public string Acc { get; set; } = null!;

    public decimal Amt { get; set; }

    public string EnteredBy { get; set; } = null!;

    public DateTime? EntSoftDate { get; set; }

    public DateTime EntSysDate { get; set; }
}
