using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class SalesArea
{
    public decimal TransId { get; set; }

    public string Acc { get; set; } = null!;

    public string Acn { get; set; } = null!;

    public string? EnteredBy { get; set; }

    public string? EnteredSys { get; set; }

    public DateTime EnteredDate { get; set; }

    public string? EditedBy { get; set; }

    public string? EditedSys { get; set; }

    public DateTime? EditedDate { get; set; }
}
